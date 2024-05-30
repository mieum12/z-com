'use client'

import { usePathname } from "next/navigation";
import style from "./rightSearchZone.module.css"
import SearchForm from "./SearchForm";

export default function RightSearchZone() {
  const onChangeFollow = () => {}
  const onChangeAll = () => {}
  
  // 탐색하기에서는 검색창 숨기기
  const pathname = usePathname();
  if (pathname === '/explore') {
    return null;
  }

  // 검색하기에서는 필터창 보여주기
  if (pathname === '/search') {
    return(
      <div>
        <h5 className={style.filterTitle}>검색 필터</h5>
        <div className={style.filterSection}>

          <div>
            <label>사용자</label>
            <div className={style.radio}>
              <div>모든 사용자</div>
              <input type="radio" name="pf" defaultChecked onChange={onChangeAll} />
            </div>
            <div className={style.radio}>
              <div>내가 팔로우하는 사람들</div>
              <input type="radio" name="pf" value="on" onChange={onChangeFollow} />
            </div>
          </div>

          <div>
            <label>위치</label>
            <div className={style.radio}>
              <div>어디에서나</div>
              <input type="radio" name="pf" defaultChecked onChange={onChangeAll} />
            </div>
            <div className={style.radio}>
              <div>현 위치 주변</div>
              <input type="radio" name="pf" value="on" onChange={onChangeFollow} />
            </div>
          </div>

        </div>
      </div>
    )
  }

  return(
    <div style={{ marginBottom: 60, width: 'inherit' }}>
      <SearchForm/>
    </div>
  )
}