import { useEffect, useState } from "react";
import ListItem from "./ListItem";

export default function List({openDetails}) {
  const [list, setList] = useState([]),
        [loading, setLoading] = useState(false),
        [activeItems, setActiveItems] = useState(null);

  useEffect(()=> {
    const responseData = async () => {
      setLoading(true);
      await fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
        .then((resp) => resp.json())
        .then((data) => {
          setList(data);
          setActiveItems(
            data.map((el) => {
              return {id: el.id, active: false}
            })
          )
        })
        .catch((e) => {
          console.error(`Ошибка загрузки: ${e}`)
        })
        .finally(() => {setLoading(false)})
    }

    responseData();
  }, []);

  const selectActiveItem = (id) => {
    openDetails(id);
    setActiveItems(
      activeItems.map((item) => {
        if(item.id === id) {
          return {id: item.id, active: true}
        } else {
          return {id: item.id, active: false}
        }
      })
    )
  }

return (
  <ul>
    {loading && <div>Загрузка...</div>}
    {list && activeItems ? list.map((el) => (
      <ListItem 
        key={el.id}
        listItemActive={selectActiveItem}
        active={
          activeItems.filter((item) => el.id === item.id)[0].active
        }
        id={el.id}>
          {el.name}
        </ListItem>)) : null}
  </ul>
)

}

