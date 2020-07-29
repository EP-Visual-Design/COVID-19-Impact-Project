import React from 'react';
import { VictoryPie, VictoryBar } from 'victory';
import material from './material';

import { colors, orderColors_pie, colorfor } from './colors';

// const x = item.Country_Region;
// const y = item.Deaths;
// const label = x + '\n' + item.Deaths;
// pie_data.push({ x, y, label });

const World = ({ pie_data, opacity }) => {
  // const { pie_data } = props;
  const pieslices = pie_data[0].slices;
  const barslices = pie_data[1].slices.concat().reverse();
  orderColors_pie(pieslices);
  // console.log('World items', pie_data);
  console.log('World pieslices', pieslices);
  console.log('World barslices', barslices);
  let other = '';
  if (barslices.length > 0) {
    // other = barslices[0].label.split('\n')[0];
    const ent = barslices[0];
    const label = ent.x.substring(0, 1);
    // console.log('World ent', ent);
    other =
      label + ' Total for the ' + ent.count + ' regions not shown on graph';
  }
  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', opacity }}>
        <VictoryPie
          style={{ parent: { maxWidth: '50%' } }}
          colorScale={colors}
          theme={material}
          data={pieslices}
        />
        <VictoryBar
          horizontal
          style={{
            parent: { maxWidth: '50%' },
            data: {
              fill: ({ _x }) => colorfor(barslices.length - _x),
            },
          }}
          theme={material}
          data={barslices}
        />
        {other}
      </div>
    </div>
  );
};

export default World;
