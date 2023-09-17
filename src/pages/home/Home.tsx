import BarChartBox from "../../components/barChartBox/BarChartBox";
import BigChartBox from "../../components/bigChartBox/BigChartBox";
import ChartBox from "../../components/chartBox/ChartBox";
import PieChartBox from "../../components/pieCartBox/PieChartBox";
import TopBox from "../../components/topBox/TopBox";
import Select from "../../components/select/Select";
import StackedBarChart from '../../components/stackedbarchart/StackedBarChart';
import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "../../data";
import "./home.scss";

const Home = () => {
  return (
    <>
    <div className="home" style={{marginBottom:'10px'}}>
      
      <div className="box box2">
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="box box3">
        <ChartBox {...chartBoxProduct} />
      </div>
      {/* <div className="box box4">
        <PieChartBox />
      </div> */}
      <div className="box box5">
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className="box box6">
        <ChartBox {...chartBoxRevenue} />
      </div>
      
      {/* <div className="box box1">
        <TopBox />
      </div> */}
      {/* <div className="box box8">
        <BarChartBox {...barChartBoxVisit} />
      </div>
      <div className="box box9">
        <BarChartBox {...barChartBoxRevenue} />
      </div> */}
    </div>
    <div style={{display:'flex',flexDirection:'row' }}>
      <div style={{display:'flex' , flexDirection:'column'}}>
    <div className="box box7"  style={{height:'270px' , width:'100%'}}>
        {/* <BigChartBox /> */}
       <StackedBarChart/>
      </div>
      <div style={{display:'flex',flexDirection:'row'}}>
      <div className="box box4" style={{width:'33%' , height:'230px'}}>
        <PieChartBox />
      </div>
       <div className="box box8" style={{width:'33%' , height:'230px' , marginLeft:'10px'}}> 
        <BarChartBox {...barChartBoxVisit} />
      </div>
      <div className="box box8" style={{width:'33%' , height:'230px' , marginLeft:'10px'}}> 
        <BarChartBox {...barChartBoxVisit} />
      </div>
      </div>
      
      </div>
    
    
    <div className="box box1" style={{marginLeft:'20px'}}>
      <TopBox/>
    </div>
    
   
    
  </div>
  
    
    </>
  );
};

export default Home;
