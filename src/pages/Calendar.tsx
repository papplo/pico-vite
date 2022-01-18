import './calendar.styles.css'
     
export default function Calendar() {

  function DaySelectionItem({ name, id, description }) {

    return (
    <article>
      <input id={id && id} type="radio" name="slot" value={name} />
      <label for={id && id}>{name && name}</label>
      <small>{description && description.replace('From', '')}</small>
    </article>
    )
  }



const weekDaysData = [
{
 id: '124124',
 name: 'Morning',
 description: 'From 07:00 — 09.30' 
},
{
 id: '125124',
 name: 'Noon',
 description: 'From 10:00 — 11.30' }, {
 id: '624124',
 name: 'Mid day',
 description: 'From 12:00 — 13.30'
},
{
 id: '1241245',
 name: 'Evening',
 description: 'From 15:00 — 16.30' 
},
{
 id: '134124',
 name: 'Night',
 description: 'From 17:00 — 20.30' 
}
]

return (
<main className="container">
<article role="week_schedule">
  <header>
  <div className="grid">
  <div>M</div>
  <div>T</div>
  <div>W</div>
  <div>T</div>
  <div>F</div>
  <div>S</div>
  <div>S</div>
  </div>
  </header>
Pick your preferred time  
<form className="grid">
{weekDaysData.map(item => <DaySelectionItem {...item} />)}
</form>
</article>
</main>

)

}
