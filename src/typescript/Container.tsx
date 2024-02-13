import React from 'react';
import '../css/style.css';
import '../css/bootstrap.min.css'
import Itemisation from './Itemisation';
import Item from "./Itemisation";

function Container(){
    return(
        <div className="tab-content">
            <div id="tab-1" className="tab-pane fade show p-0 active">
                <div className="row g-4">
                    <div className="col-lg-12">
                        <div className="row g-4">
                            <Itemisation/>
                            <Itemisation/>
                            <Itemisation/>
                            <Itemisation/>
                            <Itemisation/>
                            <Itemisation/>
                            <Itemisation/>
                            <Itemisation/>
                        </div>
                    </div>
                </div>
            </div>/
        </div>

    )
}

export default Container;