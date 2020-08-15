import React from 'react';
import HistoryItem from './HistoryItem';

const History = ({ transactions}) => {
  return (
    <section class="history">
      <h3>История расходов</h3>
      <ul class="history__list">
        {transitions.map(item => <HistoryItem
        key={item.id} transaction={item}
        />)}
      </ul>
      </section>
  )
}
export default History;