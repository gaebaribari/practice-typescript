import { useRecoilValue, useSetRecoilState } from "recoil";
import Page from "./page";
import { isDarkAtom } from "./atoms";

export default function App() {
  const isDark = useRecoilValue(isDarkAtom);
const setDarkAtom = useSetRecoilState(isDarkAtom);
  return (
    <div>
      <p>지금 다크모드의 상태는 {String(isDark)}입니다 </p>
      <button onClick={()=>setDarkAtom((prev)=>!prev)}>다크모드 상태바꾸기</button>
      <Page></Page>
    </div>
  );
}
