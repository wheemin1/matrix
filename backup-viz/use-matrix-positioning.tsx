import * as React from "react";
import { useIsMobile } from "./use-mobile";

// 화면 크기에 따른 매트릭스 포인트 배치 최적화 훅
export function useMatrixPositioning() {
  const isMobile = useIsMobile();
  const [windowSize, setWindowSize] = React.useState<{ width: number; height: number }>({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800
  });

  // 화면 크기 변경 감지
  React.useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 기기 유형에 따른 최적의 설정 계산
  const getDeviceConfig = React.useMemo(() => {
    // 초소형 모바일 (320px~375px)
    if (windowSize.width < 376) {
      return {
        mainPointSize: 14, // 메인 포인트 크기
        innerPointSize: 12, // 내부 포인트 크기
        outerPointSize: 11, // 외부 포인트 크기
        mainFontSize: 16, // 메인 폰트 크기
        secondaryFontSize: 12, // 보조 폰트 크기
        minDistance: 40, // 노드 간 최소 거리
        containerPadding: 10, // 컨테이너 패딩
        centerPointSize: 18, // 중앙 포인트 크기
        mainPointMargin: '5%', // 주요 포인트 마진
        innerPointPosition: '25%', // 내부 포인트 위치
        outerPointPosition: '2%', // 외부 포인트 위치
        zIndexLevel: {
          outer: 20,
          inner: 25,
          main: 30,
          center: 50
        },
        touchArea: {
          main: 12,
          inner: 10,
          outer: 10,
          center: 14
        }
      };
    }
    // 일반 모바일 (376px~480px)
    else if (windowSize.width < 481) {
      return {
        mainPointSize: 16,
        innerPointSize: 14,
        outerPointSize: 12,
        mainFontSize: 18,
        secondaryFontSize: 14,
        minDistance: 50,
        containerPadding: 15,
        centerPointSize: 20,
        mainPointMargin: '6%',
        innerPointPosition: '26%',
        outerPointPosition: '1.5%',
        zIndexLevel: {
          outer: 20,
          inner: 25,
          main: 30,
          center: 50
        },
        touchArea: {
          main: 12,
          inner: 10,
          outer: 10,
          center: 14
        }
      };
    }
    // 대형 모바일/태블릿 (481px~768px)
    else if (windowSize.width < 769) {
      return {
        mainPointSize: 16,
        innerPointSize: 14,
        outerPointSize: 14,
        mainFontSize: 18,
        secondaryFontSize: 14,
        minDistance: 60,
        containerPadding: 20,
        centerPointSize: 20,
        mainPointMargin: '7%',
        innerPointPosition: '24%',
        outerPointPosition: '1%',
        zIndexLevel: {
          outer: 20,
          inner: 25,
          main: 30,
          center: 50
        },
        touchArea: {
          main: 14,
          inner: 12,
          outer: 12,
          center: 16
        }
      };
    }
    // 데스크톱 (769px 이상)
    else {
      return {
        mainPointSize: 20,
        innerPointSize: 16,
        outerPointSize: 16,
        mainFontSize: 20,
        secondaryFontSize: 16,
        minDistance: 80,
        containerPadding: 30,
        centerPointSize: 24,
        mainPointMargin: '8%',
        innerPointPosition: '22%',
        outerPointPosition: '1%',
        zIndexLevel: {
          outer: 20,
          inner: 25,
          main: 30,
          center: 50
        },
        touchArea: {
          main: 16,
          inner: 14,
          outer: 14,
          center: 18
        }
      };
    }
  }, [windowSize.width]);

  // 원형 좌표계 기반 노드 위치 계산 및 겹침 방지 최적화
  const calculateOptimizedPositions = (
    matrixPoints: Record<string, number>, 
    containerSize: number
  ) => {
    // 화면 비율에 따른 조정 계수 계산
    const aspectRatio = windowSize.width / windowSize.height;
    const isWideScreen = aspectRatio > 1.2; // 가로로 긴 화면인지 확인
    const isVerySmallScreen = windowSize.width < 376; // 매우 작은 화면
    const isSmallScreen = windowSize.width < 481; // 작은 화면
    const isMediumScreen = windowSize.width < 769; // 중간 화면

    // 컨테이너 중심점 계산
    const centerX = containerSize / 2;
    const centerY = containerSize / 2;
    
    // 최적의 레이아웃을 위한 반지름 비율 계산
    // 작은 화면일수록 상대적으로 더 작은 중앙 영역과 더 넓은 외부 영역을 사용하여 겹치지 않게 함
    let mainLayerRatio, innerLayerRatio, outerLayerRatio;
    
    if (isVerySmallScreen) {
      // 매우 작은 화면에서는 좀 더 촘촘하게 배치하되 겹침 방지를 위해 비율 최적화
      mainLayerRatio = 0.34; // 메인 노드 원의 반지름 비율
      innerLayerRatio = 0.21; // 내부 노드 원의 반지름 비율
      outerLayerRatio = 0.45; // 외부 노드 원의 반지름 비율
    } else if (isSmallScreen) {
      mainLayerRatio = 0.36;
      innerLayerRatio = 0.23; 
      outerLayerRatio = 0.47;
    } else if (isMediumScreen) {
      mainLayerRatio = 0.38;
      innerLayerRatio = 0.25;
      outerLayerRatio = 0.49;
    } else {
      // 큰 화면에서는 넓게 분포
      mainLayerRatio = 0.40;
      innerLayerRatio = 0.27;
      outerLayerRatio = 0.50;
    }
    
    // 컨테이너 크기에 따른 실제 반지름 계산
    const mainLayerRadius = containerSize * mainLayerRatio;
    const innerLayerRadius = containerSize * innerLayerRatio;
    const outerLayerRadius = containerSize * outerLayerRatio;
    
    // 노드 크기와 컨테이너 크기에 비례하는 여백 계산
    // 작은 컨테이너일수록 노드 간 거리가 상대적으로 더 커야 겹치지 않음
    let nodeMargin;
    
    if (containerSize < 300) {
      nodeMargin = containerSize * 0.018; // 더 작은 화면에서는 더 큰 여백 비율
    } else if (containerSize < 400) {
      nodeMargin = containerSize * 0.015;
    } else if (containerSize < 500) {
      nodeMargin = containerSize * 0.012;
    } else {
      nodeMargin = containerSize * 0.01; // 큰 화면에서는 작은 여백으로도 충분
    }
    
    // 각도 계산 (라디안)
    const degreeToRadian = (degree: number) => (degree * Math.PI) / 180;
    
    // 메인 노드 각도 - 정확히 12시, 3시, 6시, 9시 방향 (270°, 0°, 90°, 180°)
    const mainAngles = [270, 0, 90, 180].map(degreeToRadian);
    
    // 내부 노드 각도 - 균등하게 분포된 45° 간격 (315°, 45°, 135°, 225°)
    const innerAngles = [315, 45, 135, 225].map(degreeToRadian);
    
    // 외부 노드 각도 - 메인 노드와 동일하지만 더 먼 거리
    const outerAngles = [270, 0, 90, 180].map(degreeToRadian);
    
    // 원형 좌표계로 각 노드의 위치 계산
    const positions: Record<string, any> = {};
    
    // 노드 크기 동적 계산 - 컨테이너 크기에 비례하게
    // 작은 화면에서는 노드가 상대적으로 더 작게, 큰 화면에서는 더 크게
    const getScaledNodeSize = (baseSize: number, nodeType: string): number => {
      // 노드 타입별로 다른 스케일링 팩터 적용 (중앙 노드는 더 크게, 외부 노드는 더 작게)
      let typeScaleFactor = 1.0;
      if (nodeType === 'center') typeScaleFactor = 1.1;
      else if (nodeType === 'main') typeScaleFactor = 1.0;
      else if (nodeType === 'inner') typeScaleFactor = 0.95;
      else if (nodeType === 'outer') typeScaleFactor = 0.9;
      
      // 컨테이너 크기에 따라 기본 노드 크기를 스케일링
      const containerScaleFactor = containerSize < 300 ? 0.85 : 
                                   containerSize < 350 ? 0.9 :
                                   containerSize < 400 ? 0.95 : 
                                   containerSize < 500 ? 1.0 : 
                                   containerSize < 600 ? 1.05 : 1.1;
      
      // 최소 크기 보장 (너무 작아지지 않도록)
      const scaledSize = baseSize * containerScaleFactor * typeScaleFactor;
      
      // 노드 타입별 최소 크기 설정
      const minSize = nodeType === 'center' ? 12 : 
                     nodeType === 'main' ? 10 : 
                     nodeType === 'inner' ? 8 : 6;
                     
      return Math.max(scaledSize, minSize);
    };
    
    // 메인 노드 (외부 다이아몬드 꼭지점)
    const mainKeys = ['spiritualPurpose', 'talent', 'karma', 'behavior'];
    mainKeys.forEach((key, i) => {
      positions[key] = {
        type: 'main',
        angle: mainAngles[i],
        radius: mainLayerRadius,
        pixelX: centerX + Math.cos(mainAngles[i]) * mainLayerRadius,
        pixelY: centerY + Math.sin(mainAngles[i]) * mainLayerRadius,
        size: getScaledNodeSize(getDeviceConfig.mainPointSize, 'main'),
        value: matrixPoints[key]
      };
    });
    
    // 내부 노드 (내부 다이아몬드 꼭지점)
    const innerKeys = ['additional1', 'additional2', 'additional3', 'additional4'];
    innerKeys.forEach((key, i) => {
      positions[key] = {
        type: 'inner',
        angle: innerAngles[i],
        radius: innerLayerRadius,
        pixelX: centerX + Math.cos(innerAngles[i]) * innerLayerRadius,
        pixelY: centerY + Math.sin(innerAngles[i]) * innerLayerRadius,
        size: getScaledNodeSize(getDeviceConfig.innerPointSize, 'inner'),
        value: matrixPoints[key]
      };
    });
    
    // 외부 노드 (생애 주기)
    const outerKeys = ['outer1', 'outer2', 'outer3', 'outer4'];
    outerKeys.forEach((key, i) => {
      positions[key] = {
        type: 'outer',
        angle: outerAngles[i],
        radius: outerLayerRadius,
        pixelX: centerX + Math.cos(outerAngles[i]) * outerLayerRadius,
        pixelY: centerY + Math.sin(outerAngles[i]) * outerLayerRadius,
        size: getScaledNodeSize(getDeviceConfig.outerPointSize, 'outer'),
        value: matrixPoints[key]
      };
    });
    
    // 중앙 노드
    positions['coreEnergy'] = {
      type: 'center',
      pixelX: centerX,
      pixelY: centerY,
      size: getScaledNodeSize(getDeviceConfig.centerPointSize, 'center'),
      value: matrixPoints['coreEnergy']
    };
    
    // 노드 간 최소 거리 확인 및 충돌 감지
    const checkNodeOverlap = () => {
      // 겹침 확인이 필요한 모든 노드 쌍 정의
      const nodePairs = [
        // 메인 노드와 내부 노드 쌍
        ['spiritualPurpose', 'additional1'], ['spiritualPurpose', 'additional4'],
        ['talent', 'additional1'], ['talent', 'additional2'],
        ['karma', 'additional2'], ['karma', 'additional3'],
        ['behavior', 'additional3'], ['behavior', 'additional4'],
        
        // 메인 노드와 외부 노드 쌍
        ['outer1', 'spiritualPurpose'], ['outer2', 'talent'],
        ['outer3', 'karma'], ['outer4', 'behavior'],
        
        // 내부 노드 쌍 (비스듬히 인접한 것들)
        ['additional1', 'additional2'], ['additional2', 'additional3'],
        ['additional3', 'additional4'], ['additional4', 'additional1'],
        
        // 중앙 노드와 내부 노드 쌍
        ['coreEnergy', 'additional1'], ['coreEnergy', 'additional2'],
        ['coreEnergy', 'additional3'], ['coreEnergy', 'additional4']
      ];
      
      // 겹친 노드 수 카운트
      let overlapCount = 0;
      
      // 각 쌍별로 거리 확인
      nodePairs.forEach(([node1, node2]) => {
        if (!positions[node1] || !positions[node2]) return;
        
        const dx = positions[node2].pixelX - positions[node1].pixelX;
        const dy = positions[node2].pixelY - positions[node1].pixelY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // 두 노드의 실제 크기(반지름)와 필요한 최소 여백 계산
        const minDistance = positions[node1].size + positions[node2].size + nodeMargin;
        
        if (distance < minDistance) {
          overlapCount++;
        }
      });
      
      return overlapCount;
    };
    
    // 겹침 최소화를 위한 반복적 최적화
    const optimizeLayout = () => {
      // 초기 겹침 수 확인
      let overlapCount = checkNodeOverlap();
      
      // 최대 8회까지 최적화 시도 (더 많은 반복으로 작은 화면에서도 최적화)
      for (let i = 0; i < 8 && overlapCount > 0; i++) {
        // 1. 노드 크기 미세 조정
        // 작은 화면일수록 더 적극적으로 노드 크기 줄임
        const sizeReductionNeeded = containerSize < 320 ? true : 
                                  containerSize < 400 ? overlapCount > 1 : 
                                  overlapCount > 3;
        
        if (sizeReductionNeeded) {
          // 각 노드 타입별로 크기 조정 계수를 다르게 적용
          const sizeReductionFactor = 0.97 - (i * 0.015); // 반복할수록 더 많이 줄임
          
          Object.keys(positions).forEach(key => {
            if (positions[key].type === 'main') {
              positions[key].size = Math.max(positions[key].size * sizeReductionFactor, 10);
            } else if (positions[key].type === 'inner') {
              positions[key].size = Math.max(positions[key].size * sizeReductionFactor, 8);
            } else if (positions[key].type === 'outer') {
              positions[key].size = Math.max(positions[key].size * sizeReductionFactor, 7);
            } else if (positions[key].type === 'center' && containerSize < 350) {
              // 중앙 노드도 매우 작은 화면에서는 약간 줄임
              positions[key].size = Math.max(positions[key].size * (sizeReductionFactor + 0.01), 11);
            }
          });
        }
        
        // 2. 반지름 미세 조정 (다이아몬드 크기 조정)
        // 내부 노드는 중심쪽으로, 외부 노드는 바깥쪽으로 약간 이동
        const radiusAdjustFactor = 1 + (i * 0.015); // 반복할수록 더 많이 조정
        
        // 내부 노드의 반지름 줄임 (중심에 더 가깝게)
        innerKeys.forEach((key, idx) => {
          const newRadius = innerLayerRadius * (1 - (i * 0.025));
          positions[key].radius = newRadius;
          positions[key].pixelX = centerX + Math.cos(innerAngles[idx]) * newRadius;
          positions[key].pixelY = centerY + Math.sin(innerAngles[idx]) * newRadius;
        });
        
        // 외부 노드의 반지름 늘림 (바깥으로 더 멀리)
        outerKeys.forEach((key, idx) => {
          const newRadius = outerLayerRadius * radiusAdjustFactor;
          positions[key].radius = newRadius;
          positions[key].pixelX = centerX + Math.cos(outerAngles[idx]) * newRadius;
          positions[key].pixelY = centerY + Math.sin(outerAngles[idx]) * newRadius;
        });
        
        // 3. 각도 미세 조정 (노드 간 각도 간격 최적화)
        // 매우 작은 화면에서는 내부 노드의 각도를 약간 조정하여 더 균등하게 분포
        if (containerSize < 350 && i > 3) {
          const angleAdjustment = (i - 3) * 2; // 4번째 반복부터 각도 조정
          
          // 내부 노드의 각도를 약간 조정
          innerKeys.forEach((key, idx) => {
            // 각도를 약간 더 중앙으로 이동 (메인 노드와의 거리 증가)
            let adjustedAngle;
            if (idx === 0) adjustedAngle = degreeToRadian(315 + angleAdjustment);
            else if (idx === 1) adjustedAngle = degreeToRadian(45 - angleAdjustment);
            else if (idx === 2) adjustedAngle = degreeToRadian(135 + angleAdjustment);
            else adjustedAngle = degreeToRadian(225 - angleAdjustment);
            
            positions[key].angle = adjustedAngle;
            positions[key].pixelX = centerX + Math.cos(adjustedAngle) * positions[key].radius;
            positions[key].pixelY = centerY + Math.sin(adjustedAngle) * positions[key].radius;
          });
        }
        
        // 새로운 겹침 수 확인
        const newOverlapCount = checkNodeOverlap();
        
        // 개선되지 않으면 중단
        if (newOverlapCount >= overlapCount && i > 2) break;
        
        overlapCount = newOverlapCount;
        
        // 완전히 최적화되었으면 종료
        if (overlapCount === 0) break;
      }
    };
    
    // 필요시 레이아웃 최적화 실행
    optimizeLayout();
    
    // 겹침 감지 후 노드 크기 및 위치 최종 조정
    if (checkNodeOverlap() > 0) {
      // 최후의 수단: 특수 케이스에 대한 추가 대응
      if (containerSize < 320) {
        // 1. 매우 작은 화면에서는 전체 노드 크기 일괄 축소
        Object.keys(positions).forEach(key => {
          if (positions[key].type === 'outer') {
            positions[key].size = Math.max(positions[key].size * 0.85, 6);
          } else if (positions[key].type === 'inner') {
            positions[key].size = Math.max(positions[key].size * 0.88, 7);
          } else if (positions[key].type === 'main') {
            positions[key].size = Math.max(positions[key].size * 0.9, 9);
          } else {
            positions[key].size = Math.max(positions[key].size * 0.95, 10);
          }
        });
        
        // 2. 내부 노드를 더 중심쪽으로 이동
        innerKeys.forEach((key, idx) => {
          const emergencyRadius = innerLayerRadius * 0.85;
          positions[key].radius = emergencyRadius;
          positions[key].pixelX = centerX + Math.cos(positions[key].angle) * emergencyRadius;
          positions[key].pixelY = centerY + Math.sin(positions[key].angle) * emergencyRadius;
        });
        
        // 3. 외부 노드를 더 바깥쪽으로 이동
        outerKeys.forEach((key, idx) => {
          const emergencyRadius = outerLayerRadius * 1.12;
          positions[key].radius = emergencyRadius;
          positions[key].pixelX = centerX + Math.cos(outerAngles[idx]) * emergencyRadius;
          positions[key].pixelY = centerY + Math.sin(outerAngles[idx]) * emergencyRadius;
        });
      } else if (containerSize < 400) {
        // 중간 크기 화면에서도 약간의 조정
        Object.keys(positions).forEach(key => {
          if (positions[key].type !== 'center') {
            positions[key].size = Math.max(positions[key].size * 0.92, 8);
          }
        });
      }
    }
    
    // 모든 노드 위치가 유효한지 확인하고 컨테이너 경계 내에 있도록 보장
    Object.keys(positions).forEach(key => {
      // 노드 좌표가 컨테이너를 벗어나지 않도록 제한
      const nodeSize = positions[key].size;
      const margin = 5; // 경계에서 최소 여백
      
      positions[key].pixelX = Math.min(Math.max(positions[key].pixelX, nodeSize + margin), containerSize - nodeSize - margin);
      positions[key].pixelY = Math.min(Math.max(positions[key].pixelY, nodeSize + margin), containerSize - nodeSize - margin);
    });
    
    // 최종 계산된 노드 위치 반환
    return positions;
  };

  return {
    deviceConfig: getDeviceConfig,
    calculateOptimizedPositions
  };
}
