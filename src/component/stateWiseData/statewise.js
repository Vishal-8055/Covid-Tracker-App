import React,{useState,useEffect} from 'react';

const Statewise = () => {
  const [data, setData]= useState([]);

  const getCoviddata = async () => {
    const res = await frtch('https://api.covid19india.org/data.json');
    const actualData =await res.json();
    console.log(actualData.covid);
    setData(actualData.covid)
  }
  useEffect(() => {
    getCoviddata();

  },[]);
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="main-heading">
          <h1 className="mb-5 text-center"> <span className="font-weight-bold">INDIA</span>Covid-19 Dashboard</h1>
        </div>
        <div className="table-responsive">
          <table className="table table-hover">
            <thread className="thread-dark">
              <tr>
                <th> State </th>
                <th> Confirmed </th>
                <th> Recovered </th>
                <th> Deaths</th>
                <th> Active </th>
                <th> updated </th>
              </tr>
            </thread>
            <tbody>
                {
                  data.map((curElem,ind)=>{
                    return(
                      <tr key={ind}>
                      <td> {curElem.State} </td>
                      <td> {curElem.Confirmed} </td>
                      <td> {curElem.Recovered} </td>
                      <td> {curElem.Deaths} </td>
                      <td> {curElem.Active} </td>
                      <td> {curElem.lastupdated} </td>
                      </tr>
                    )
                  })
                }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
export default Statewise