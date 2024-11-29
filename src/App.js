import './App.css';

function App() {
  return (
    <div className="App" style={{ display: "flex", justifyContent: "center" }}>
      <Notes />
    </div>
  );
}

function Notes() {
  const backendData = [
    { id: '1', text: 'Річниця Всеукраїнського референдуму про відділення від СРСР. Рівно 30 років тому  90% українців висловилися за Незалежність України.', url: 'https://w.wiki/8RcL' },
    { id: '2', text: 'Ярослав Мудрий у 1015 році посів у Києві княжий престол', url: 'https://www.hroniky.com/news/view/13944-iaroslav-mudryi-u-1015-rotsi-posiv-u-kyievi-kniazhyi-prestol' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' },
    { id: '7' },
    { id: '8' },
    { id: '9' },
    { id: '10' },
    { id: '11' },
    { id: '12' },
    { id: '13' },
    { id: '14' },
    { id: '15' },
    { id: '16' },
    { id: '17' },
    { id: '18' },
    { id: '19' },
    { id: '20' },
    { id: '21' },
    { id: '22' },
    { id: '23' },
    { id: '24' },
  ]

  const noteRootStyle = {
    border: "2px #0af solid",
    borderRadius: 9,
    margin: 20,
    backgroundColor: "#efefef",
    padding: 6
  };

  return (
    <div style={{ width: 400 }}>
      {backendData.map(day => 
        <div style={noteRootStyle} key={day.id}>
          <p>{day.text}</p>
          <a href={day.url}>{day.url}</a>
        </div>
      )}
    </div>
  )
}

export default App;
