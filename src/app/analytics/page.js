'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AnalyticsPage() {
    return (
        <div className="page-inner">
            {/* Main Wrapper */}
            <div id="main-wrapper">
                {/*================================*/}
                {/* Breadcrumb Start */}
                {/*================================*/}
                <div className="pageheader pd-t-25 pd-b-35">
                    <div className="pd-t-5 pd-b-5">
                        <h1 className="pd-0 mg-0 tx-20">Website Analytics</h1>
                    </div>
                    <div className="breadcrumb pd-0 mg-0">
                        <Link className="breadcrumb-item" href="/"><i className="icon ion-ios-home-outline"></i> Home</Link>
                        <Link className="breadcrumb-item" href="">Dashboard</Link>
                        <span className="breadcrumb-item active">Website Analytics</span>
                    </div>
                </div>
                {/*/ Breadcrumb End */}
                {/*================================*/}
                {/* Audience Metrics Start */}
                {/*================================*/}
                <div className="row row-xs clearfix">
                    <div className="col-lg-12 col-xl-8 col-12">
                        <div className="card mg-b-20">
                            <div className="card-header">
                                <h4 className="card-header-title">
                                    Audience Metrics
                                </h4>
                                <div className="card-header-btn">
                                    <a href="" data-toggle="collapse" className="btn card-collapse" data-target="#audienceMetrics" aria-expanded="true"><i className="ion-ios-arrow-down"></i></a>
                                    <a href="" data-toggle="refresh" className="btn card-refresh"><i className="ion-android-refresh"></i></a>
                                    <a href="" data-toggle="expand" className="btn card-expand"><i className="ion-android-expand"></i></a>
                                    <a href="" data-toggle="remove" className="btn card-remove"><i className="ion-android-close"></i></a>
                                </div>
                            </div>
                            <div className="collapse show" id="audienceMetrics">
                                <div className="card-body pd-t-0 pd-b-20">
                                    <div className="row row-xs clearfix">
                                        <div className="col-lg-4 col-md-4 col-sm-12 pd-y-15 d-flex align-items-center justify-content-center">
                                            <div className="wd-10 ht-10 rounded-circle bd bd-3 bd-info mg-r-10"></div>
                                            <div>
                                                <span className="tx-uppercase tx-10 mg-b-10">New Visitors</span>
                                                <h3 className="tx-20 tx-sm-18 tx-md-24 mg-b-0 tx-normal tx-rubik tx-dark"><span className="counter">50,350</span></h3>
                                                <div className="tx-11 d-flex tx-gray-500"><span className="text-success mr-2 d-flex align-items-center"><i className="ion-android-arrow-up mr-1"></i>+535%</span>avg. per month</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12 pd-md-y-15 d-flex align-items-center justify-content-center">
                                            <div className="wd-10 ht-10 rounded-circle bd bd-3 bd-info mg-r-10 op-5"></div>
                                            <div>
                                                <span className="tx-uppercase tx-10 mg-b-10">Unique Visitors</span>
                                                <h3 className="tx-20 tx-sm-18 tx-md-24 mg-b-0 tx-normal tx-rubik tx-dark"><span className="counter">80,830</span></h3>
                                                <div className="tx-11 d-flex tx-gray-500"><span className="text-success mr-2 d-flex align-items-center"><i className="ion-android-arrow-up mr-1"></i>+230%</span>avg. per month</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12 pd-y-15 d-flex align-items-center justify-content-center">
                                            <div className="wd-10 ht-10 rounded-circle bd bd-3 bd-success mg-r-10"></div>
                                            <div>
                                                <span className="tx-uppercase tx-10 mg-b-10">Returning Visitors</span>
                                                <h3 className="tx-20 tx-sm-18 tx-md-24 mg-b-0 tx-normal tx-rubik tx-dark"><span className="counter">30,360</span></h3>
                                                <div className="tx-11 d-flex tx-gray-500"><span className="text-danger mr-2 d-flex align-items-center"><i className="ion-android-arrow-down mr-1"></i>-135%</span>avg. per month</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-block clearfix">
                                        <div id="audienceOverviewBar" style={{ height: '300px' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mg-b-20">
                            <div className="card card-body">
                                <div className="d-flex">
                                    <span className="wd-80 ht-80 card-icon-primary d-flex align-items-center justify-content-center rounded hidden-xs"><i className="ion-ios-speedometer-outline tx-50"></i></span>
                                    <div className="mg-l-0 mg-md-l-20">
                                        <h6 className="mg-b-5">Download your analytics report.</h6>
                                        <p className="tx-12 mg-b-5 tx-gray-600">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor incididunt ut labore et dolore. <a href="">Learn More</a></p>
                                        <p className="mg-b-0">
                                            <a href="" className="btn btn-sm btn-label-primary mg-t-5"><i className="mdi mdi-file-pdf"></i> CSV Formate</a>
                                            <a href="" className="btn btn-sm btn-label-danger mg-t-5"><i className="mdi mdi-file-pdf"></i> XLM Formate</a>
                                            <a href="" className="btn btn-sm btn-label-success mg-t-5"><i className="mdi mdi-file-pdf"></i> PDF Formate</a>
                                            <a href="" className="btn btn-sm btn-label-warning mg-t-5"><i className="mdi mdi-file-pdf"></i> Word Formate</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 mg-t-10 mg-lg-t-0">
                        <div className="card mg-b-20">
                            <div className="card-header">
                                <h4 className="card-header-title">
                                    Sessions By Channel
                                </h4>
                                <div className="card-header-btn">
                                    <a href="" data-toggle="collapse" className="btn card-collapse" data-target="#sessionsChannel" aria-expanded="true"><i className="ion-ios-arrow-down"></i></a>
                                    <a href="" data-toggle="refresh" className="btn card-refresh"><i className="ion-android-refresh"></i></a>
                                    <a href="" data-toggle="expand" className="btn card-expand"><i className="ion-android-expand"></i></a>
                                    <a href="" data-toggle="remove" className="btn card-remove"><i className="ion-android-close"></i></a>
                                </div>
                            </div>
                            <div className="card-body collapse show" id="sessionsChannel">
                                <div className="clearfix">
                                    <div id="sessionsDeviceDonut" style={{ height: '220px' }}></div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 col-md-6 col-xl-12 mg-t-40">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="tx-uppercase tx-10 mg-b-0 tx-gray-500">New Users</h6>
                                            <span className="tx-10 tx-gray-500">65% goal reached</span>
                                        </div>
                                        <div className="d-flex align-items-end justify-content-between mg-b-5">
                                            <h5 className="mg-b-0 tx-dark tx-rubik tx-normal"><span className="counter">3,860</span></h5>
                                            <div className="d-flex align-items-center tx-gray-600"><span className="small text-success mr-2 d-flex align-items-center"><i className="ion-android-arrow-up mr-1"></i>+351</span></div>
                                        </div>
                                        <div className="progress ht-3 mg-b-0 op-5">
                                            <div className="progress-bar bg-teal wd-70p" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-xl-12 mg-t-40">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="tx-uppercase tx-10 mg-b-0 tx-gray-500">Page Views</h6>
                                            <span className="tx-10 tx-gray-500">65% goal reached</span>
                                        </div>
                                        <div className="d-flex align-items-end justify-content-between mg-b-5">
                                            <h5 className="mg-b-0 tx-dark tx-rubik tx-normal"><span className="counter">64,530</span></h5>
                                            <div className="d-flex align-items-center tx-gray-600"><span className="small text-success mr-2 d-flex align-items-center"><i className="ion-android-arrow-up mr-1"></i>+425</span></div>
                                        </div>
                                        <div className="progress ht-3 mg-b-0 op-5">
                                            <div className="progress-bar bg-danger wd-80p" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-xl-12 mg-t-40">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="tx-uppercase tx-10 mg-b-0 tx-gray-500">Page Seasion</h6>
                                            <span className="tx-10 tx-gray-500">65% goal reached</span>
                                        </div>
                                        <div className="d-flex align-items-end justify-content-between mg-b-5">
                                            <h5 className="mg-b-0 tx-dark tx-rubik tx-normal"><span className="counter">49.38</span>%</h5>
                                            <div className="d-flex align-items-center tx-gray-600"><span className="small text-danger mr-2 d-flex align-items-center"><i className="ion-android-arrow-down mr-1"></i>-211</span></div>
                                        </div>
                                        <div className="progress ht-3 mg-b-0 op-5">
                                            <div className="progress-bar bg-warning wd-70p" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-xl-12 mg-t-40">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="tx-uppercase tx-10 mg-b-0 tx-gray-500">Bounce Rate</h6>
                                            <span className="tx-10 tx-gray-500">65% goal reached</span>
                                        </div>
                                        <div className="d-flex align-items-end justify-content-between mg-b-5">
                                            <h5 className="mg-b-0 tx-dark tx-rubik tx-normal"><span className="counter">45.90</span>%</h5>
                                            <div className="d-flex align-items-center tx-gray-600"><span className="small text-success mr-2 d-flex align-items-center"><i className="ion-android-arrow-up mr-1"></i>+151</span></div>
                                        </div>
                                        <div className="progress ht-3 mg-b-0 op-5">
                                            <div className="progress-bar bg-primary wd-65p" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*/ Audience Metrics End */}
                {/*================================*/}
                {/* Behavior/Conversions Start */}
                {/*================================*/}
                <div className="row row-xs clearfix">
                    <div className="col-xl-6">
                        <div className="card mg-b-20">
                            <div className="card-body">
                                <h6 className="tx-dark tx-uppercase mg-b-10 tx-16 tx-semibold tx-spacing-1">Behavior</h6>
                                <p className="tx-12 mb-2 tx-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. <a href="">Learn More</a></p>
                                <div className="row">
                                    <div className="col-sm-4 d-sm-flex align-items-center">
                                        <div className="media mg-t-20">
                                            <div className="wd-45 wd-md-50 ht-45 ht-md-50 card-icon-primary mg-r-10 mg-md-r-10 d-flex align-items-center justify-content-center rounded">
                                                <i className="ion-ios-pulse-strong tx-primary tx-20"></i>
                                            </div>
                                            <div>
                                                <span className="tx-uppercase tx-10 tx-gray-500">Click Through</span>
                                                <h4 className="tx-dark tx-20 mg-b-0 tx-rubik tx-normal"><span className="counter">8,338</span></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 d-sm-flex align-items-center">
                                        <div className="media mg-t-20">
                                            <div className="wd-45 wd-md-50 ht-45 ht-md-50 card-icon-danger mg-r-10 mg-md-r-10 d-flex align-items-center justify-content-center rounded">
                                                <i className="ion-ios-pulse-strong tx-danger tx-20"></i>
                                            </div>
                                            <div>
                                                <span className="tx-uppercase tx-10 tx-gray-500">Bounce Rate</span>
                                                <h4 className="tx-dark tx-20 mg-b-0 tx-rubik tx-normal"><span className="counter">49.38</span><small className="tx-15">%</small></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 d-sm-flex align-items-center">
                                        <div className="media mg-t-20">
                                            <div className="wd-45 wd-md-50 ht-45 ht-md-50 card-icon-warning mg-r-10 mg-md-r-10 d-flex align-items-center justify-content-center rounded">
                                                <i className="ion-ios-pulse-strong tx-warning tx-20"></i>
                                            </div>
                                            <div>
                                                <span className="tx-uppercase tx-10 tx-gray-500">Avg. Seasion</span>
                                                <h4 className="tx-dark tx-20 mg-b-0 tx-rubik tx-normal"><span className="counter">8,338</span></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="clearfix">
                                            <div id="behaviorAreaChart"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="card mg-b-20">
                            <div className="card-body">
                                <h6 className="tx-dark tx-uppercase mg-b-10 tx-16 tx-semibold tx-spacing-1">Conversions</h6>
                                <p className="tx-12 mb-2 tx-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. <a href="">Learn More</a></p>
                                <div className="row">
                                    <div className="col-sm-4 d-sm-flex align-items-center">
                                        <div className="media mg-t-20">
                                            <div className="wd-45 wd-md-50 ht-45 ht-md-50 card-icon-primary mg-r-10 mg-md-r-10 d-flex align-items-center justify-content-center rounded">
                                                <i className="ion-ios-pulse-strong tx-primary tx-20"></i>
                                            </div>
                                            <div>
                                                <span className="tx-uppercase tx-10 tx-gray-500">Transactions</span>
                                                <h4 className="tx-dark tx-20 mg-b-0 tx-rubik tx-normal">$ <span className="counter">45,938</span></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 d-sm-flex align-items-center">
                                        <div className="media mg-t-20">
                                            <div className="wd-45 wd-md-50 ht-45 ht-md-50 card-icon-warning mg-r-10 mg-md-r-10 d-flex align-items-center justify-content-center rounded">
                                                <i className="ion-ios-pulse-strong tx-warning tx-20"></i>
                                            </div>
                                            <div>
                                                <span className="tx-uppercase tx-10 tx-gray-500">Revenue</span>
                                                <h4 className="tx-dark tx-20 mg-b-0 tx-rubik tx-normal">$<span className="counter"> 5,338</span></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 d-sm-flex align-items-center">
                                        <div className="media mg-t-20">
                                            <div className="wd-45 wd-md-50 ht-45 ht-md-50 card-icon-danger mg-r-10 mg-md-r-10 d-flex align-items-center justify-content-center rounded">
                                                <i className="ion-ios-pulse-strong tx-danger tx-20"></i>
                                            </div>
                                            <div>
                                                <span className="tx-uppercase tx-10 tx-gray-500">Total Conversions</span>
                                                <h4 className="tx-dark tx-20 mg-b-0 tx-rubik tx-normal">$<span className="counter"> 5,338</span></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="clearfix">
                                            <div id="revenueAreaChart"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*/ Behavior/Conversions End */}

                <div className="row row-xs clearfix">
                    {/*================================*/}
                    {/* Social Traffic Start */}
                    {/*================================*/}
                    <div className="col-sm-12 col-xl-4">
                        <div className="card mg-b-20">
                            <div className="card-header">
                                <h4 className="card-header-title">
                                    Social Traffic
                                </h4>
                                <div className="card-header-btn">
                                    <a href="" data-toggle="collapse" className="btn card-collapse" data-target="#socialTraffic" aria-expanded="true"><i className="ion-ios-arrow-down"></i></a>
                                    <a href="" data-toggle="refresh" className="btn card-refresh"><i className="ion-android-refresh"></i></a>
                                    <a href="" data-toggle="expand" className="btn card-expand"><i className="ion-android-expand"></i></a>
                                    <a href="" data-toggle="remove" className="btn card-remove"><i className="ion-android-close"></i></a>
                                </div>
                            </div>
                            <div className="card-body pd-0 collapse show" id="socialTraffic">
                                <div className="table-responsive">
                                    <table className="table table-hover my-0">
                                        <thead className="tx-10 tx-uppercase">
                                            <tr>
                                                <th >Referral</th>
                                                <th className="text-right">Visitors</th>
                                                <th className="text-right d-none d-md-table-cell w-50">Percentage (%)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <a href="" className="tx-facebook"><i className="fa fa-facebook "></i> Facebook</a>
                                                </td>
                                                <td className="text-right">
                                                    1,480
                                                </td>
                                                <td className="d-none d-md-table-cell align-middle">
                                                    <div className="progress ht-3 mg-b-0 op-5">
                                                        <div className="progress-bar bg-primary wd-85p" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="" className="tx-twitter"><i className="fa fa-twitter"></i> Twitter</a>
                                                </td>
                                                <td className="text-right">
                                                    2,645
                                                </td>
                                                <td className="d-none d-md-table-cell align-middle">
                                                    <div className="progress ht-3 mg-b-0 op-5">
                                                        <div className="progress-bar bg-indigo wd-75p" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="" className="tx-google-plus"><i className="fa fa-google-plus"></i> Google +</a>
                                                </td>
                                                <td className="text-right">
                                                    4,807
                                                </td>
                                                <td className="d-none d-md-table-cell align-middle">
                                                    <div className="progress ht-3 mg-b-0 op-5">
                                                        <div className="progress-bar bg-warning wd-65p" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="" className="tx-instagram"><i className="fa fa-instagram"></i> Instagram</a>
                                                </td>
                                                <td className="text-right">
                                                    3,678
                                                </td>
                                                <td className="d-none d-md-table-cell align-middle">
                                                    <div className="progress ht-3 mg-b-0 op-5">
                                                        <div className="progress-bar bg-info wd-85p" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="" className="tx-linkedin"><i className="fa fa-linkedin"></i> Linkedin</a>
                                                </td>
                                                <td className="text-right">
                                                    5,480
                                                </td>
                                                <td className="d-none d-md-table-cell align-middle">
                                                    <div className="progress ht-3 mg-b-0  op-5">
                                                        <div className="progress-bar bg-teal wd-95p" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <a href="" className="tx-dribbble"><i className="fa fa-dribbble"></i> Dribbble</a>
                                                </td>
                                                <td className="text-right">
                                                    3,245
                                                </td>
                                                <td className="d-none d-md-table-cell align-middle">
                                                    <div className="progress ht-3 mg-b-0">
                                                        <div className="progress-bar bg-danger wd-65p" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*/ Social Traffic End */}
                    {/*================================*/}
                    {/*  Start */}
                    {/*================================*/}
                    <div className="col-sm-12 col-xl-8">
                        <div className="card mg-b-20">
                            <div className="card-header">
                                <h4 className="card-header-title">
                                    Traffic Sources
                                </h4>
                                <div className="card-header-btn">
                                    <a href="" data-toggle="collapse" className="btn card-collapse" data-target="#trafficSources" aria-expanded="true"><i className="ion-ios-arrow-down"></i></a>
                                    <a href="" data-toggle="refresh" className="btn card-refresh"><i className="ion-android-refresh"></i></a>
                                    <a href="" data-toggle="expand" className="btn card-expand"><i className="ion-android-expand"></i></a>
                                    <a href="" data-toggle="remove" className="btn card-remove"><i className="ion-android-close"></i></a>
                                </div>
                            </div>
                            <div className="card-body pd-0 collapse show" id="trafficSources">
                                <div className="table-responsive" >
                                    <table className="table table-hover my-0">
                                        <thead className="tx-10 tx-uppercase">
                                            <tr>
                                                <th>Source</th>
                                                <th className="text-right">Users</th>
                                                <th className="text-right">Sessions</th>
                                                <th className="text-right">Bounce Rate</th>
                                                <th className="text-right">Avg. Duration</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><a href="">Google Organic Search</a></td>
                                                <td className="text-right">2,658</td>
                                                <td className="text-right">1,254</td>
                                                <td className="text-right">27.23% <small>(<i className="fa fa-arrow-up text-success ml-1"></i> 46%</small>)</td>
                                                <td className="text-right">00:24:24</td>
                                            </tr>
                                            <tr>
                                                <td><a href="">Bing Organic Search</a></td>
                                                <td className="text-right">3,254</td>
                                                <td className="text-right">2,154</td>
                                                <td className="text-right">38.95% <small>(<i className="fa fa-arrow-up text-success ml-1"></i> 38%</small>)</td>
                                                <td className="text-right">00:05:35</td>
                                            </tr>
                                            <tr>
                                                <td><a href="">DuckDuckGo Organic Search</a></td>
                                                <td className="text-right">2,543</td>
                                                <td className="text-right">1,245</td>
                                                <td className="text-right">27.23% <small>(<i className="fa fa-arrow-up text-success ml-1"></i> 46%</small>)</td>
                                                <td className="text-right">00:09:42</td>
                                            </tr>
                                            <tr>
                                                <td><a href="">Social media</a></td>
                                                <td className="text-right">4,521</td>
                                                <td className="text-right">1,077</td>
                                                <td className="text-right">35.23% <small>(<i className="fa fa-arrow-down text-danger ml-1"></i> 24%</small>)</td>
                                                <td className="text-right">00:09:25</td>
                                            </tr>
                                            <tr>
                                                <td><a href="">Referral</a></td>
                                                <td className="text-right">2,546</td>
                                                <td className="text-right">1,024</td>
                                                <td className="text-right">31.24% <small>(<i className="fa fa-arrow-up text-success ml-1"></i> 24%</small>)</td>
                                                <td className="text-right">00:08:38</td>
                                            </tr>
                                            <tr>
                                                <td><a href="">Email</a></td>
                                                <td className="text-right">3,524</td>
                                                <td className="text-right">1,365</td>
                                                <td className="text-right">27.23% <small>(<i className="fa fa-arrow-down text-danger ml-1"></i> 46%</small>)</td>
                                                <td className="text-right">00:07:38</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*/  End */}
                </div>
                {/*================================*/}
                {/* Browser Used By Users Start */}
                {/*================================*/}
                <div className="row row-xs clearfix">
                    <div className="col-sm-12 col-xl-8">
                        <div className="card mg-b-20">
                            <div className="card-header">
                                <h4 className="card-header-title">
                                    Browser Used By Users
                                </h4>
                                <div className="card-header-btn">
                                    <a href="" data-toggle="collapse" className="btn card-collapse" data-target="#browserUsedByUsers" aria-expanded="true"><i className="ion-ios-arrow-down"></i></a>
                                    <a href="" data-toggle="refresh" className="btn card-refresh"><i className="ion-android-refresh"></i></a>
                                    <a href="" data-toggle="expand" className="btn card-expand"><i className="ion-android-expand"></i></a>
                                    <a href="" data-toggle="remove" className="btn card-remove"><i className="ion-android-close"></i></a>
                                </div>
                            </div>
                            <div className="card-body pd-0 collapse show" id="browserUsedByUsers">
                                <div className="table-responsive">
                                    <table className="table table-hover mg-0">
                                        <thead className="tx-10 tx-uppercase">
                                            <tr>
                                                <th className="wd-5p">&nbsp;</th>
                                                <th>Browser</th>
                                                <th className="text-right">Sessions</th>
                                                <th className="text-right">Bounce Rate</th>
                                                <th className="text-right">Avg. Duration</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><i className="fa fa-chrome tx-15 tx-primary op-6"></i></td>
                                                <td><a href="">Google Chrome</a></td>
                                                <td className="text-right">13,410</td>
                                                <td className="text-right">31.24% <small>(<i className="fa fa-arrow-up text-success ml-1"></i> 39%</small>)</td>
                                                <td className="text-right">00:39:58</td>
                                            </tr>
                                            <tr>
                                                <td><i className="fa fa-firefox tx-15 tx-orange"></i></td>
                                                <td><a href="">Mozilla Firefox</a></td>
                                                <td className="text-right">1,710</td>
                                                <td className="text-right">31.24% <small>(<i className="fa fa-arrow-up text-success ml-1"></i> 44%</small>)</td>
                                                <td className="text-right">00:37:19</td>
                                            </tr>
                                            <tr>
                                                <td><i className="fa fa-safari tx-15 tx-primary"></i></td>
                                                <td><a href="">Apple Safari</a></td>
                                                <td className="text-right">1,340</td>
                                                <td className="text-right">31.24% <small>(<i className="fa fa-arrow-down text-danger ml-1"></i> 54%</small>)</td>
                                                <td className="text-right">00:28:18</td>
                                            </tr>
                                            <tr>
                                                <td><i className="fa fa-edge tx-15 tx-primary"></i></td>
                                                <td><a href="">Microsoft Edge</a></td>
                                                <td className="text-right">713</td>
                                                <td className="text-right">31.24% <small>(<i className="fa fa-arrow-up text-success ml-1"></i> 52%</small>)</td>
                                                <td className="text-right">00:17:42</td>
                                            </tr>
                                            <tr>
                                                <td><i className="fa fa-opera tx-15 tx-danger"></i></td>
                                                <td><a href="">Opera</a></td>
                                                <td className="text-right">380</td>
                                                <td className="text-right">31.24% <small>(<i className="fa fa-arrow-down text-danger ml-1"></i> 45%</small>)</td>
                                                <td className="text-right">00:15:38</td>
                                            </tr>
                                            <tr>
                                                <td><i className="fa fa-futbol-o tx-15 tx-secondary"></i></td>
                                                <td><a href="">Others</a></td>
                                                <td className="text-right">1,523</td>
                                                <td className="text-right">25.53% <small>(<i className="fa fa-arrow-down text-danger ml-1"></i> 21%</small>)</td>
                                                <td className="text-right">00:11:24</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="card mg-b-20">
                            <div className="card-header">
                                <h4 className="card-header-title">
                                    Visitors By Devices
                                </h4>
                                <div className="card-header-btn">
                                    <a href="" data-toggle="collapse" className="btn card-collapse" data-target="#visitorsDevices" aria-expanded="true"><i className="ion-ios-arrow-down"></i></a>
                                    <a href="" data-toggle="refresh" className="btn card-refresh"><i className="ion-android-refresh"></i></a>
                                    <a href="" data-toggle="expand" className="btn card-expand"><i className="ion-android-expand"></i></a>
                                    <a href="" data-toggle="remove" className="btn card-remove"><i className="ion-android-close"></i></a>
                                </div>
                            </div>
                            <div className="card-body pd-0 collapse show" id="visitorsDevices">
                                <div className="row no-gutters mg-x-15">
                                    <div className="col-md-4 pd-t-10">
                                        <div className="media mg-t-20">
                                            <div className="wd-40 wd-md-50 ht-40 ht-md-50 card-icon-primary mg-r-10 mg-md-r-10 d-flex align-items-center justify-content-center rounded">
                                                <i className="ion-android-desktop tx-primary tx-20"></i>
                                            </div>
                                            <div>
                                                <span className="tx-uppercase tx-10 tx-gray-500">Desktop</span>
                                                <h4 className="tx-20 tx-sm-18 tx-md-24 mg-b-0 tx-normal tx-rubik tx-dark"><span className="counter">5,958</span></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 pd-t-10">
                                        <div className="media mg-t-20">
                                            <div className="wd-40 wd-md-50 ht-40 ht-md-50 card-icon-warning mg-r-10 mg-md-r-10 d-flex align-items-center justify-content-center rounded">
                                                <i className="ion-iphone tx-warning tx-20"></i>
                                            </div>
                                            <div>
                                                <span className="tx-uppercase tx-10 tx-gray-500">Mobile</span>
                                                <h4 className="tx-20 tx-sm-18 tx-md-24 mg-b-0 tx-normal tx-rubik tx-dark"><span className="counter">3,958</span></h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 pd-t-10">
                                        <div className="media mg-t-20">
                                            <div className="wd-40 wd-md-50 ht-40 ht-md-50 card-icon-success mg-r-10 mg-md-r-10 d-flex align-items-center justify-content-center rounded">
                                                <i className="icon-cloud-upload tx-success tx-20"></i>
                                            </div>
                                            <div>
                                                <span className="tx-uppercase tx-10 tx-gray-500">Others</span>
                                                <h4 className="tx-20 tx-sm-18 tx-md-24 mg-b-0 tx-normal tx-rubik tx-dark"><span className="counter">2,958</span></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="clearfix">
                                    <div id="visitorsByDevices"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*/ Browser Used By Users  End */}
                <div className="row row-xs clearfix">
                    {/*================================*/}
                    {/* Visitors By Languages Start */}
                    {/*================================*/}
                    <div className="col-xl-4">
                        <div className="card mg-b-20">
                            <div className="card-header">
                                <h4 className="card-header-title">
                                    Visitors By Languages
                                </h4>
                                <div className="card-header-btn">
                                    <a href="" data-toggle="collapse" className="btn card-collapse" data-target="#visitorsByLanguages" aria-expanded="true"><i className="ion-ios-arrow-down"></i></a>
                                    <a href="" data-toggle="refresh" className="btn card-refresh"><i className="ion-android-refresh"></i></a>
                                    <a href="" data-toggle="expand" className="btn card-expand"><i className="ion-android-expand"></i></a>
                                    <a href="" data-toggle="remove" className="btn card-remove"><i className="ion-android-close"></i></a>
                                </div>
                            </div>
                            <div className="card-body pd-0 collapse show" id="visitorsByLanguages">
                                <table className="table table-hover my-0">
                                    <thead className="tx-10 tx-uppercase">
                                        <tr>
                                            <th>Language</th>
                                            <th className="text-right">Users</th>
                                            <th className="text-right d-none d-md-table-cell w-50">Percentage (%)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><i className="flag-icon flag-icon-us mr-1"></i> en-us</td>
                                            <td className="text-right">735</td>
                                            <td className="d-none d-md-table-cell align-middle">
                                                <div className="progress ht-3 op-5">
                                                    <div className="progress-bar bg-success wd-95p" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"> </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><i className="flag-icon flag-icon-gb mr-1"></i> en-gb</td>
                                            <td className="text-right">223</td>
                                            <td className="d-none d-md-table-cell align-middle">
                                                <div className="progress ht-3 op-5">
                                                    <div className="progress-bar bg-info wd-85p" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><i className="flag-icon flag-icon-fr mr-1"></i> fr-fr</td>
                                            <td className="text-right">181</td>
                                            <td className="d-none d-md-table-cell align-middle">
                                                <div className="progress ht-3 op-5">
                                                    <div className="progress-bar bg-danger wd-90p" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><i className="flag-icon flag-icon-es mr-1"></i> es-es</td>
                                            <td className="text-right">132</td>
                                            <td className="d-none d-md-table-cell align-middle">
                                                <div className="progress ht-3 op-5">
                                                    <div className="progress-bar bg-teal wd-75p" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><i className="flag-icon flag-icon-de mr-1"></i> de-de</td>
                                            <td className="text-right">118</td>
                                            <td className="d-none d-md-table-cell align-middle">
                                                <div className="progress ht-3 op-5">
                                                    <div className="progress-bar bg-warning wd-60p" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/*/   Visitors By Languages End */}
                    {/*================================*/}
                    {/*  Visitors By Country Start */}
                    {/*================================*/}
                    <div className="col-xl-8">
                        <div className="card mg-b-20">
                            <div className="card-header">
                                <h4 className="card-header-title">
                                    Visitors By Country
                                </h4>
                                <div className="card-header-btn">
                                    <a href="" data-toggle="collapse" className="btn card-collapse" data-target="#visitorsByCountry" aria-expanded="true"><i className="ion-ios-arrow-down"></i></a>
                                    <a href="" data-toggle="refresh" className="btn card-refresh"><i className="ion-android-refresh"></i></a>
                                    <a href="" data-toggle="expand" className="btn card-expand"><i className="ion-android-expand"></i></a>
                                    <a href="" data-toggle="remove" className="btn card-remove"><i className="ion-android-close"></i></a>
                                </div>
                            </div>
                            <div className="card-body pd-0 collapse show" id="visitorsByCountry">
                                <div className="table-responsive">
                                    <table className="table table-hover mg-0">
                                        <thead className="tx-10 tx-uppercase">
                                            <tr>
                                                <th>Country</th>
                                                <th className="text-right">Users</th>
                                                <th className="text-right">Session</th>
                                                <th className="text-right">Bounce Rate</th>
                                                <th className="text-right">Session %</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><i className="flag-icon flag-icon-gb mr-1"></i> United State (US)</td>
                                                <td className="text-right">20,254</td>
                                                <td className="text-right">5,868</td>
                                                <td className="text-right">40.25%</td>
                                                <td className="align-middle">
                                                    <div className="progress ht-3 mg-b-0 op-5">
                                                        <div className="progress-bar bg-success" role="progressbar" style={{ width: '85%' }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><i className="flag-icon flag-icon-au mr-1"></i> Australia</td>
                                                <td className="text-right">18,852</td>
                                                <td className="text-right">2,563</td>
                                                <td className="text-right">36.32%</td>
                                                <td className="align-middle">
                                                    <div className="progress ht-3 mg-b-0">
                                                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><i className="flag-icon flag-icon-br mr-1"></i> Brazil</td>
                                                <td className="text-right">14,985</td>
                                                <td className="text-right">2,354</td>
                                                <td className="text-right">42.14%</td>
                                                <td className="align-middle">
                                                    <div className="progress ht-3 mg-b-0 op-5">
                                                        <div className="progress-bar bg-info" role="progressbar" style={{ width: '66%' }} aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><i className="flag-icon flag-icon-gb mr-1"></i> United Kingdom (UK)</td>
                                                <td className="text-right">13,245</td>
                                                <td className="text-right">3,521</td>
                                                <td className="text-right">35.54%</td>
                                                <td className="align-middle">
                                                    <div className="progress ht-3 mg-b-0 op-5">
                                                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: '58%' }} aria-valuenow="58" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><i className="flag-icon flag-icon-in mr-1"></i> India</td>
                                                <td className="text-right">12,412</td>
                                                <td className="text-right">3,549</td>
                                                <td className="text-right">31.24%</td>
                                                <td className="align-middle">
                                                    <div className="progress ht-3 mg-b-0 op-5">
                                                        <div className="progress-bar bg-teal" role="progressbar" style={{ width: '38%' }} aria-valuenow="38" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*/  Visitors By Country End */}
            </div>
        </div>
    );
}
