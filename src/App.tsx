import { AxesDirective, AxisDirective, CircularGaugeComponent, PointerDirective, PointersDirective, RangeDirective, RangesDirective } from '@syncfusion/ej2-react-circulargauge';
import './App.css';

function App() {
  return (
    <div className="App">
      <CircularGaugeComponent>
      <AxesDirective>
      <AxisDirective startAngle = {270} endAngle = {90} radius='150'
      labelStyle={{position:'Outside'}}>
      <PointersDirective>
            <PointerDirective value = {40}
             cap = {{radius: 15}} >
            </PointerDirective>
        </PointersDirective>
        <RangesDirective>
           <RangeDirective start = {40} end = {80}></RangeDirective>
        </RangesDirective>
      </AxisDirective>
      </AxesDirective>
      </CircularGaugeComponent>
    </div>
  );
}

export default App;
