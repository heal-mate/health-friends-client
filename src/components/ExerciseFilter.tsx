import { css, styled } from "styled-components";
import { FaDumbbell } from "react-icons/fa";
import Rangeinput from "@/components/RangeInput";
import { ExerciseType } from "@/components/MatchFilter.type";

const weightMarks = {
  0: "0kg",
  25: "25kg",
  50: "50kg",
  75: "75kg",
  100: "100kg",
};

export type ExerciseFilterProps = {
  exerciseList: ExerciseType[];
  showType: ExerciseType | null;
  handleSelectType: (item: ExerciseType, index: number) => void;
  handleChangeWeight: (ranges: [number, number], id: number) => void;
};

export default function ExerciseFilter({
  exerciseList,
  showType,
  handleChangeWeight,
  handleSelectType,
}: ExerciseFilterProps) {
  return (
    <>
      <StyledContainer>
        {exerciseList &&
          exerciseList.map((item, index) => {
            return (
              <StyledExerciseButton
                key={item.id}
                $isChecked={item.isChecked}
                onClick={() => handleSelectType(item, index)}
              >
                <StyledDumbbellIcon />
                {item.name}
              </StyledExerciseButton>
            );
          })}
      </StyledContainer>
      {showType && (
        <Rangeinput
          type={showType.name}
          marks={weightMarks}
          suffix="kg"
          handleChange={(e) => handleChangeWeight(e, showType.id)}
          min={showType.min}
          max={showType.max}
        />
      )}
    </>
  );
}

const StyledContainer = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 10px;
`;

const StyledExerciseButton = styled.div<{ $isChecked: boolean }>`
  margin-bottom: 10px;
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  cursor: pointer;
  ${({ $isChecked }) => ($isChecked ? enableBox : disableBox)};
`;

const enableBox = css`
  color: #2851e8;
  background-color: #ffffff;
  border-bottom: 4px solid #2851e8;
  box-shadow: 2px 10px 10px 0px rgba(0, 0, 0, 0.1);
`;
const disableBox = css`
  background-color: #faf9f6;
  color: #b5b4b3;
`;
const StyledDumbbellIcon = styled(FaDumbbell)`
  font-size: 20px;
`;
