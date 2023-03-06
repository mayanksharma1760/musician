import React from 'react'
import Headingline from '../../../musicartist/components/headingline/Headingline'
import "./dates.css"
const Dates = () => {
    return (
        <div className='Dates'>

            <div className="Dates_heading">EUROPEAN TOUR DATES<Headingline type='red'/></div>

            <div className="Dates_box">

                <div className="Dates_boxRow">
                    <div className="Dates_boxRowSec1">
                        <div className="Dates_boxRowCell">
                            <span className="Dates_boxRowCellSubtitle">Monday</span>
                            <span className="Dates_boxRowCellTitle">May 23</span>
                        </div>
                        <div className="Dates_boxRowCell" style={{width:'235px'}}>
                            <span className="Dates_boxRowCellSubtitle">Berlin, Germany</span>
                            <span className="Dates_boxRowCellTitle"><a href="#">Arena Berlin</a></span>
                        </div>
                    </div>
                    <div className="Dates_boxRowSec2">
                        <div className="Dates_boxRowCell">
                            <span className="Dates_boxRowCellSubtitle">Fan club</span>
                            <span className='Dates_boxRowCellTitle'>Sold out</span>
                        </div>
                        <div className="Dates_boxRowCell">
                            <span className="Dates_boxRowCellSubtitle">Vip tickets</span>
                            <span className='Dates_boxRowCellTitle'>Sold out</span>
                        </div>
                        <button className='Dates_boxRowCellBtn'>GET TICKETS</button>
                    </div>
                </div>
                <hr className="Dates_boxLine" />

                <div className="Dates_boxRow">
                    <div className="Dates_boxRowSec1">
                        <div className="Dates_boxRowCell">
                            <span className="Dates_boxRowCellSubtitle">WEDNESDAY</span>
                            <span className="Dates_boxRowCellTitle">May 25</span>
                        </div>
                        <div className="Dates_boxRowCell" style={{width:'235px'}}>
                            <span className="Dates_boxRowCellSubtitle">LONDON. UK</span>
                            <span className="Dates_boxRowCellTitle"><a href="#" >Theunderworld</a></span>
                        </div>
                    </div>

                    <div className="Dates_boxRowSec2">

                        <div className="Dates_boxRowCell" >
                            <span className="Dates_boxRowCellSubtitle">Fan club</span>
                            <span className='Dates_boxRowCellTitle' >Sold out</span>
                        </div>

                        <div className=" Dates_boxRowCellCombonedbtn">
                            <span className="Dates_boxRowCellSubtitle">Vip tickets</span>
                            <span className='Dates_boxRowCellTitle' style={{fontSize:'18px', marginTop:'2px'}}>GET TICKETS</span>
                        </div>
                        <button className='Dates_boxRowCellBtn'>GET TICKETS</button>

                    </div>
                </div>
                <hr className="Dates_boxLine" />

                <div className="Dates_boxRow">
                    <div className="Dates_boxRowSec1">
                        <div className="Dates_boxRowCell">
                            <span className="Dates_boxRowCellSubtitle">THRUSDAY</span>
                            <span className="Dates_boxRowCellTitle">JUN 02</span>
                        </div>

                        <div className="Dates_boxRowCell"  style={{width:'235px'}}>
                            <span className="Dates_boxRowCellSubtitle">LONDON. UK</span>
                            <span className="Dates_boxRowCellTitle"><a href="#" >TheMACBETH</a></span>

                        </div>
                    </div>

                    <div className="Dates_boxRowSec2">

                        <div className=" Dates_boxRowCellCombonedbtn">
                            <span className="Dates_boxRowCellSubtitle">Fan club</span>
                            <span className='Dates_boxRowCellTitle'style={{fontSize:'18px', marginTop:'2px'}}>GET TICKETS</span>
                        </div>

                        <div className=" Dates_boxRowCellCombonedbtn">
                            <span className="Dates_boxRowCellSubtitle">Vip tickets</span>
                            <span className='Dates_boxRowCellTitle' style={{fontSize:'18px', marginTop:'2px'}}>GET TICKETS</span>
                        </div>
                        <button className='Dates_boxRowCellBtn'>GET TICKETS</button>

                    </div>
                </div>
                <hr className="Dates_boxLine" />

                <div className="Dates_boxRow">
                    <div className="Dates_boxRowSec1">
                        <div className="Dates_boxRowCell">
                            <span className="Dates_boxRowCellSubtitle">FRIDAY</span>
                            <span className="Dates_boxRowCellTitle">JUN 03</span>
                        </div>

                        <div className="Dates_boxRowCell"  style={{width:'235px'}}>
                            <span className="Dates_boxRowCellSubtitle">LONDON. UK</span>
                            <span className="Dates_boxRowCellTitle"><a href="#"  style={{fontSize:'22px'}}>THE OLD BLUE LAST</a></span>

                        </div>
                    </div>

                    <div className="Dates_boxRowSec2">

                        <div className="Dates_boxRowCell" >
                            <span className="Dates_boxRowCellSubtitle">Fan club</span>
                            <span className='Dates_boxRowCellTitle'>Sold out</span>
                        </div>

                        <div className="Dates_boxRowCell">
                            <span className="Dates_boxRowCellSubtitle">Vip tickets</span>
                            <span className='Dates_boxRowCellTitle' >N/A</span>
                        </div>
                        <button className='Dates_boxRowCellBtn'>GET TICKETS</button>

                    </div>
                </div>

                <hr className="Dates_boxLine" />

                <div className="Dates_boxRow">
                    <div className="Dates_boxRowSec1">
                        <div className="Dates_boxRowCell">
                            <span className="Dates_boxRowCellSubtitle">FRIDAY</span>
                            <span className="Dates_boxRowCellTitle">JUN 03</span>
                        </div>

                        <div className="Dates_boxRowCell" style={{width:'235px'}}>
                            <span className="Dates_boxRowCellSubtitle">BUDAPEST, HUNGARY</span>
                            <span className="Dates_boxRowCellTitle"><a href="#"  style={{fontSize:'25px'}}>BUDAPEST PARK</a></span>

                        </div>
                    </div>

                    <div className="Dates_boxRowSec2">

                        <div className="Dates_boxRowCell">
                            <span className="Dates_boxRowCellSubtitle">Fan club</span>
                            <span className='Dates_boxRowCellTitle'>Sold out</span>
                        </div>

                        <div className="Dates_boxRowCell">
                            <span className="Dates_boxRowCellSubtitle">Vip tickets</span>
                            <span className='Dates_boxRowCellTitle' >N/A</span>
                        </div>
                        <button className='Dates_boxRowCellBtn'>GET TICKETS</button>

                    </div>
                </div>

            </div>

<div className="Dates_btn">VIEW ALL DATES</div>

        
        </div>




    )
}

export default Dates
