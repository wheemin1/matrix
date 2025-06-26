import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Sparkles, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { personalAnalysisSchema, coupleAnalysisSchema, type PersonalAnalysisRequest, type CoupleAnalysisRequest } from "@shared/schema";

interface InputFormProps {
  mode: 'personal' | 'couple';
  onAnalysisComplete: (result: any) => void;
  onBack: () => void;
}

export default function InputForm({ mode, onAnalysisComplete, onBack }: InputFormProps) {
  const { toast } = useToast();
  
  const personalForm = useForm<PersonalAnalysisRequest>({
    resolver: zodResolver(personalAnalysisSchema),
    defaultValues: {
      mode: 'personal',
      personalName: '',
      personalBirthdate: '',
      personalGender: undefined,
    },
  });

  const coupleForm = useForm<CoupleAnalysisRequest>({
    resolver: zodResolver(coupleAnalysisSchema),
    defaultValues: {
      mode: 'couple',
      person1Name: '',
      person1Birthdate: '',
      person1Gender: undefined,
      person2Name: '',
      person2Birthdate: '',
      person2Gender: undefined,
    },
  });

  const analysisMutation = useMutation({
    mutationFn: async (data: PersonalAnalysisRequest | CoupleAnalysisRequest) => {
      const response = await apiRequest('POST', '/api/analyze', data);
      return response.json();
    },
    onSuccess: (result) => {
      toast({
        title: "분석 완료",
        description: "데스티니 매트릭스 분석이 완료되었습니다.",
      });
      onAnalysisComplete(result);
    },
    onError: (error: any) => {
      toast({
        title: "분석 실패",
        description: error.message || "분석 중 오류가 발생했습니다.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: PersonalAnalysisRequest | CoupleAnalysisRequest) => {
    analysisMutation.mutate(data);
  };

  return (
    <div className="glass-card p-8 mb-8">
      <div className="flex items-center justify-between mb-8">
        <Button
          variant="ghost" 
          onClick={onBack}
          className="text-white/70 hover:text-white"
        >
          <ArrowLeft className="mr-2" size={16} />
          뒤로가기
        </Button>
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-2">
            {mode === 'personal' ? '개인 정보 입력' : '커플 정보 입력'}
          </h3>
          <p className="text-white/70">정확한 분석을 위해 생년월일 정보가 필요합니다</p>
        </div>
        <div className="w-20"></div>
      </div>
      
      {mode === 'personal' ? (
        <Form {...personalForm}>
          <form onSubmit={personalForm.handleSubmit(onSubmit)} className="max-w-md mx-auto space-y-6">
            <FormField
              control={personalForm.control}
              name="personalName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white font-medium">이름</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="이름을 입력하세요"
                      className="bg-white/10 border-white/30 text-white placeholder-white/50 focus:border-yellow-400 focus:ring-yellow-400/50"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={personalForm.control}
              name="personalBirthdate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white font-medium">생년월일</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="date"
                      className="bg-white/10 border-white/30 text-white focus:border-yellow-400 focus:ring-yellow-400/50"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={personalForm.control}
              name="personalGender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white font-medium">성별</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-white/10 border-white/30 text-white focus:border-yellow-400 focus:ring-yellow-400/50">
                        <SelectValue placeholder="성별을 선택하세요" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-gray-900 border-white/30">
                      <SelectItem value="male" className="text-white hover:bg-white/10">남성</SelectItem>
                      <SelectItem value="female" className="text-white hover:bg-white/10">여성</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button
              type="submit"
              disabled={analysisMutation.isPending}
              className="w-full mystical-button from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-white font-semibold py-4 rounded-xl"
            >
              <Sparkles className="mr-2" size={20} />
              {analysisMutation.isPending ? '분석 중...' : '운명 분석하기'}
            </Button>
          </form>
        </Form>
      ) : (
        <Form {...coupleForm}>
          <form onSubmit={coupleForm.handleSubmit(onSubmit)} className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h4 className="text-lg font-semibold text-white mb-4 text-center">첫 번째 사람</h4>
                <div className="space-y-4">
                  <FormField
                    control={coupleForm.control}
                    name="person1Name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white font-medium">이름</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="이름을 입력하세요"
                            className="bg-white/10 border-white/30 text-white placeholder-white/50 focus:border-yellow-400 focus:ring-yellow-400/50"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={coupleForm.control}
                    name="person1Birthdate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white font-medium">생년월일</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="date"
                            className="bg-white/10 border-white/30 text-white focus:border-yellow-400 focus:ring-yellow-400/50"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={coupleForm.control}
                    name="person1Gender"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white font-medium">성별</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-white/10 border-white/30 text-white focus:border-yellow-400 focus:ring-yellow-400/50">
                              <SelectValue placeholder="성별 선택" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-gray-900 border-white/30">
                            <SelectItem value="male" className="text-white hover:bg-white/10">남성</SelectItem>
                            <SelectItem value="female" className="text-white hover:bg-white/10">여성</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h4 className="text-lg font-semibold text-white mb-4 text-center">두 번째 사람</h4>
                <div className="space-y-4">
                  <FormField
                    control={coupleForm.control}
                    name="person2Name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white font-medium">이름</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="이름을 입력하세요"
                            className="bg-white/10 border-white/30 text-white placeholder-white/50 focus:border-yellow-400 focus:ring-yellow-400/50"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={coupleForm.control}
                    name="person2Birthdate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white font-medium">생년월일</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="date"
                            className="bg-white/10 border-white/30 text-white focus:border-yellow-400 focus:ring-yellow-400/50"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={coupleForm.control}
                    name="person2Gender"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white font-medium">성별</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-white/10 border-white/30 text-white focus:border-yellow-400 focus:ring-yellow-400/50">
                              <SelectValue placeholder="성별 선택" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-gray-900 border-white/30">
                            <SelectItem value="male" className="text-white hover:bg-white/10">남성</SelectItem>
                            <SelectItem value="female" className="text-white hover:bg-white/10">여성</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8">
              <Button
                type="submit"
                disabled={analysisMutation.isPending}
                className="mystical-button from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-white font-semibold px-8 py-4 rounded-xl"
              >
                <Sparkles className="mr-2" size={20} />
                {analysisMutation.isPending ? '분석 중...' : '운명 분석하기'}
              </Button>
            </div>
          </form>
        </Form>
      )}
    </div>
  );
}
