import { useState } from "react";
import lines from "./TimeLine.module.scss";

export const TimeLine = () => {
  //年表の範囲をStateで管理（初期値2000-2030）
  const [startYear, setStartYear] = useState(2000);
  const [endYear, setEndYear] = useState(2030);
  const midYear = Math.floor((startYear + endYear) / 2);

  //年表データをStateで管理
  const [events, setEvents] = useState([
    { id: "1", year: 2025, text: "React勉強中" },
  ]);
  //入力用のState
  const [inputYear, setInputYear] = useState<number>();
  const [inputText, setInputText] = useState("");
  //追加ボタンを押したときの処理
  const addEvent = () => {
    if (inputYear === undefined || !inputText) return; //空欄なら追加しない
    const newEvent = {
      id: window.crypto.randomUUID(),
      year: Number(inputYear),
      text: inputText,
    };

    //現在のイベントに新しいイベントを加えた配列を作る
    const updatedEvents = [...events, newEvent];

    //年を順番に入れ替える
    updatedEvents.sort((a, b) => a.year - b.year);
    //並び替えた配列をStateにセット
    setEvents(updatedEvents);
    setInputYear(undefined);
    setInputText(""); //入力欄をクリア
  };
  const removeEvent = (id: string) => {
    const result = confirm("本当に削除しますか");
    if (result) {
      //指定したid以外のイベントだけ残す
      setEvents((prevEvents) => prevEvents.filter((event) => event.id !== id));
    } else {
      return;
    }
  };

  return (
    <div className={lines.container}>
      <p className={lines.title}>
        <input type="text" className={lines.name} defaultValue="あなた"></input>
        の歴史年表
      </p>

      <div className={lines.timelineWrapper}>
        {/*メインの横線*/}
        <div className={lines.line}></div>

        {/*左端と右端のラベル*/}
        <span className={`${lines.limitLabel} ${lines.start}`}>
          <input
            className={lines.StYear}
            type="number"
            value={startYear}
            onChange={(e) => setStartYear(Number(e.target.value))}
          />
          年
        </span>
        <span className={`${lines.limitLabel} ${lines.end}`}>
          <input
            className={lines.EnYear}
            type="number"
            value={endYear}
            onChange={(e) => setEndYear(Number(e.target.value))}
          />
          年
        </span>
        <span className={`${lines.limitLabel} ${lines.mid}`}>{midYear}年</span>

        {/* 各イベントの配置 */}
        {events.map((event, index) => {
          // 数値として確実に計算
          const yearNum =
            typeof event.year === "string" ? parseInt(event.year) : event.year;
          const position =
            ((yearNum - startYear) / (endYear - startYear)) * 100;

          return (
            <div
              key={index}
              className={lines.eventPoint}
              style={{ left: `${position}%` }}
            >
              <div className={lines.dot}></div>
              <div className={lines.label}>
                <div className={lines.year}>{event.year}年</div>
                <div className={lines.text}>{event.text}</div>
                {/*削除ボタン*/}
                <div
                  className={lines.deleteButton}
                  onClick={() => removeEvent(event.id)}
                >
                  ×
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* イベント入力フォーム */}
      <form
        className={lines.inputForm}
        onSubmit={(e) => {
          e.preventDefault();
          addEvent();
        }}
      >
        <input
          type="number"
          value={inputYear}
          onChange={(e) => setInputYear(Number(e.target.value))}
          min={startYear}
          max={endYear}
        />
        <span>年</span>
        <input
          type="text"
          id="text"
          placeholder="出来事を入力"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={addEvent} disabled={!inputText}>
          追加
        </button>
      </form>
      <div className={lines.historycontainer}>
        <p className={lines.tabletitle}>歴史年表</p>
        <table className={lines.table}>
          <thead>
            <tr>
              <th className={lines.tableYear}>年</th>
              <th className={lines.tableEvent}>出来事</th>
              <th className={lines.btntd}>　</th>
            </tr>
          </thead>
          <tbody>
            {/* eventsをループして表示 */}
            {events.map((event) => (
              <tr key={event.id}>
                <td className={lines.tableYear}>{event.year}年</td>
                <td className={lines.tableText}>{event.text}</td>
                <td className={lines.btntd}>
                  <button
                    className={lines.tableDeleteBtn}
                    onClick={() => removeEvent(event.id)}
                  >
                    ✕
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
