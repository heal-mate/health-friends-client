import { styled } from "styled-components";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { FITNESS_YEARS_MARKS, MAX_FITNESS_YEARS } from "@/config/constants";

function parseYears(year: number): string {
  const years = Math.floor(year);
  const months = ((year % 1) / 0.25) * 3;

  let duration = "";

  if (years > 0) {
    duration += years + (years === 1 ? "년 " : "년 ");
  }

  if (months > 0 || (years === 0 && months === 0)) {
    duration += months + "개월";
  }

  return duration.trim();
}

export type MatchFilterYearsProps = {
  handleChangeYears: (ranges: [number, number]) => void;
  fitnessYears: [number, number] | null;
};

export default function MatchFilterYears({
  fitnessYears,
  handleChangeYears,
}: MatchFilterYearsProps) {
  const [minYears, maxYears] = fitnessYears || [0, 5];
  return (
    <StyledContainer>
      <StyledInfo>
        <p>경력</p>
        <div>
          {minYears === 0 && maxYears === 5 ? (
            "상관없음"
          ) : (
            <>
              {parseYears(minYears)}~{parseYears(maxYears)}
            </>
          )}
        </div>
      </StyledInfo>
      <StyledRange>
        <Slider
          range
          max={MAX_FITNESS_YEARS}
          marks={FITNESS_YEARS_MARKS}
          step={0.25}
          dots={false}
          value={[minYears, maxYears]}
          defaultValue={[1, 5]}
          onChange={handleChangeYears as (range: number | number[]) => void}
        />
      </StyledRange>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  width: 100%;
  height: 100px;
`;

const StyledInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 10px;

  & > p {
    font-size: 22px;
  }

  & > div {
    font-size: 15px;
    color: ${({ theme }) => theme.colors.point};
  }
`;

const StyledRange = styled.div`
  .rc-slider-handle {
    width: 22px;
    height: 22px;
    margin-top: -4px;
    border: none;
    background-color: #faf9f6;
    opacity: 1;
    border: 2px solid ${({ theme }) => theme.colors.point};
    box-shadow: 1px 2px 3px 0px rgba(0, 0, 0, 0.5);
  }

  .rc-slider-handle-dragging.rc-slider-handle-dragging.rc-slider-handle-dragging {
    border-color: transparent;
    box-shadow: 1px 2px 3px 0px rgba(0, 0, 0, 0.5);
  }
  .rc-slider-handle:hover {
    border-color: transparent;
  }
  .rc-slider-handle:active {
    border-color: transparent;
    box-shadow: none;
    cursor: -webkit-grabbing;
    cursor: grabbing;
  }

  .rc-slider-rail {
    position: absolute;
    width: 100%;
    height: 14px;
    background-color: #faf9f6;
    border-radius: 10px;
  }
  .rc-slider-track {
    height: 14px;
    background-color: ${({ theme }) => theme.colors.point};
  }

  .rc-slider-step {
    height: 8px;
  }
  .rc-slider-mark {
    top: 30px;
  }

  // 마커 텍스트 스타일
  .rc-slider-mark-text {
    position: absolute;
    display: inline-block;
    color: #999;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
  }
  // dot 기본 스타일
  .rc-slider-dot {
    opacity: 0;
  }

  // 버튼 활성화 색상
  .rc-slider-dot-active {
    border-color: transparent;
  }
`;
