import React from 'react';
import OUBet from './OUBet';
import AutoBet from './AutoBet';
import Chat from './Chat';
import Salt from './Salt';

const HomePage = () => {
    return (
        <div className="row">
            <div className="col-sm-9 col-md-9 col-lg-9">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        Over or Under?
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-md-8">
                                <ul className="nav nav-tabs">
                                    <li className="active"><a href="#rollDice" data-toggle="tab" aria-expanded="true"><i className="fa fa-home" /> Roll Dice</a></li>
                                    <li className=""><a href="#fairness" data-toggle="tab" aria-expanded="false"><i className="fa fa-puzzle-piece" /> Fairness</a></li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane fade active in" id="rollDice">
                                        <div className="panel-body">
                                            <OUBet />
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="fairness">
                                        <div className="panel-body">
                                            <Salt />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <AutoBet />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-3 col-md-3 col-lg-3">
                <Chat />
            </div>

        </div>
    );
};
export default HomePage;
