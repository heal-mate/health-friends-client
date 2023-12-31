import Cards from "./Cards";
import { useMatchesRecommend } from "./Cards.hooks";

export default function CardsRecommend() {
  const { matchesRecommend, requestMatch, ...rest } = useMatchesRecommend();

  return (
    <>
      <Cards
        matchUserInfos={matchesRecommend?.map((e) => ({
          ...e,
          buttons: [
            {
              text: "요청하기",
              theme: "outlined",
              onClickCallback: async () => {
                requestMatch({ userId: e._id });
              },
            },
          ],
        }))}
        {...rest}
      />
    </>
  );
}
