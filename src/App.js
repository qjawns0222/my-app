import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState();
  const [data, setData] = useState([]);
  const changestart = (e) => {
    setCount(e.target.value);
  };
  const btnclick = () => {
    setData(cheuse(count));
  };

  function cheuse(id) {
    const re = id.split("\n");
    const ref = re.map((a, index) => {
      const ref = a.split("    ");
      return ref;
    });
    const refm = ref.map((a) => {
      return a.filter((a, index) => {
        if (index % 2 == 1) {
          return a;
        }
      });
    });
    const resu = refm.map((a) =>
      a.map((a) => {
        const re = a.split('"');
        return re[1];
      })
    );

    let last = [];
    resu.map((con, index1) => {
      resu.map((sub, index2) => {
        const count = 0;

        if (con[0] === sub[0]) {
          con[1] = Number(sub[1]) + Number(con[1]);
        }
      });
      let mem = {
        name: con[0],
        use: con[1],
      };
      let che = last.find((a) => a.name == con[0]);
      if (che === undefined) {
        last.push(mem);
      }
    });

    return last;
  }
  return (
    <div className="App">
      <div className="wrap">
        <div className="put">
          입력:
          <textarea onChange={changestart}></textarea>
          <button onClick={btnclick}>클릭</button>
        </div>
        <div className="out">
          <table border={1}>
            <tr>
              <td>이름</td>
              <td>뱉어야되는거</td>
            </tr>
            {data.map((a) => {
              return (
                <tr>
                  <td>{a.name}</td>
                  {a.use <= 0 ? (
                    <td className="over">{a.use}</td>
                  ) : (
                    <td className="notover">{a.use}</td>
                  )}
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
