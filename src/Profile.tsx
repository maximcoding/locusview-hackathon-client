import './Profile.css';
import locusviewLogo from './assets/locusviewLogo.svg';
import cpvnwotkyodvt from './assets/cpvnwotkyodvt.png';
import editMore from './assets/editMore.svg';
import settingssettings from './assets/settingssettings.svg';
import user from './assets/user.svg';
import iconsstar2 from './assets/iconsstar2.svg';
import notifications from './assets/notifications.svg';
import logout from './assets/logout.svg';
import pie from './assets/pie.png';
import graph from './assets/graphovertime.png';
import myr from './assets/myr.png';
import duke from './assets/image10.png';
import portal from './assets/Freelance2Portal2.svg';
const Profile = () => {
  return (
    <div>
      <img src={portal} alt="" />
    </div>
    // <div>
    //   <div className="flex-row">
    //     <div className="header-element logo">
    //       <img src={locusviewLogo} alt="" />
    //     </div>
    //     <div className="header-element">MyLocusview</div>
    //     <div className="header-element">Communication</div>
    //     <div className="header-element">Communication</div>
    //     <div className="header-element">Communication</div>
    //     <div className="header-element ring">
    //       <img src={notifications} alt="" />
    //     </div>
    //   </div>
    //   <div className="line-separator"></div>

    //   <div className="flex-row">
    //     <img className="user" src={user} alt="" />
    //     <div className="header-element">
    //       <div className="horizontal-row">
    //         <div className="user-group">
    //           <img className="avatar" src={cpvnwotkyodvt} alt="" />
    //         </div>
    //         <div className="user-group">
    //           <span className="avatar-margin">John Doe</span>
    //           <br />
    //           <span className="avatar-margin">Inspector</span>
    //           <br />
    //           <div className="horizontal-row space-between">
    //             <span className="avatar-number">4.8</span>
    //             <img src={iconsstar2} alt="" />
    //           </div>
    //         </div>
    //         <div className="user-group logout">
    //           <img src={logout} alt="" />
    //         </div>
    //       </div>
    //     </div>
    //     <div className="header-element search">
    //       <div className="search-group">
    //         <input className="text-box" type="text" />
    //         <button className="search-btn">Search</button>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="line-separator"></div>

    //   <div className="flex-row">
    //     <div className="header-element third-section">
    //       <div className="third-section-container">
    //         <span className="third-section-title">Your top matched jobs</span>
    //       </div>
    //       <div className="flex-row">
    //         <div className="header-element box">
    //           <div className="flex-row space-between">
    //             <img src={myr} alt="" />
    //             <img className="duke" src={duke} alt="" />
    //           </div>
    //           <br />
    //           <h3>Field Engineer</h3>
    //           <span>We are looking a good suitable professional</span>
    //           <br />
    //           <span>person for this very important role.</span>
    //           <br />
    //           <span>anyone can apply for this.</span>
    //           <div className="flex-row space-between">
    //             <span>Venice, CA</span>
    //             <span>$5K - $7K</span>
    //             {/* <div className="line-separator"></div> */}
    //           </div>
    //           <div className="line-separator-cards"></div>
    //           <div className="flex-row space-between">
    //             <span>View Details</span>
    //             <button>Apply Now</button>
    //           </div>
    //         </div>
    //         <div className="header-element box">
    //           <div className="flex-row space-between">
    //             <img src={myr} alt="" />
    //             <img className="duke" src={duke} alt="" />
    //           </div>
    //           <br />
    //           <h3>Inspector</h3>
    //           <span>We are looking a good suitable professional</span>
    //           <br />
    //           <span>person for this very important role.</span>
    //           <br />
    //           <span>anyone can apply for this.</span>
    //           <div className="flex-row space-between">
    //             <span>Venice, CA</span>
    //             <span>$5K - $7K</span>
    //             {/* <div className="line-separator"></div> */}
    //           </div>
    //           <div className="line-separator-cards"></div>
    //           <div className="flex-row space-between">
    //             <span>View Details</span>
    //             <button>Apply Now</button>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="flex-row">
    //         <span>...</span>
    //         <span></span>
    //       </div>

    //       <div className="top-rated-section">
    //         <h2>Top Rated</h2>
    //         <div className="flex-row">
    //           <span>Job Role</span>
    //           <span>Contractor</span>
    //           <span>Level</span>
    //           <span>Location</span>
    //           <span>Salary</span>
    //           <span>Type</span>
    //           <span>% Match</span>
    //         </div>
    //         <br />
    //         <div className="flex-row">
    //           <span>Inspector</span>
    //           <span>Quanta Services</span>
    //           <span>Senior</span>
    //           <span>California, CA</span>
    //           <span>$4700</span>
    //           <span>Full-time</span>
    //           <span>67%</span>
    //         </div>
    //         <br />
    //         <div className="flex-row">
    //           <span>Inspector</span>
    //           <span>Quanta Services</span>
    //           <span>Senior</span>
    //           <span>California, CA</span>
    //           <span>$4700</span>
    //           <span>Full-time</span>
    //           <span>67%</span>
    //         </div>
    //         <br />
    //         <div className="flex-row">
    //           <span>Inspector</span>
    //           <span>Quanta Services</span>
    //           <span>Senior</span>
    //           <span>California, CA</span>
    //           <span>$4700</span>
    //           <span>Full-time</span>
    //           <span>67%</span>
    //         </div>
    //         <br />
    //         <div className="flex-row">
    //           <span>Inspector</span>
    //           <span>Quanta Services</span>
    //           <span>Senior</span>
    //           <span>California, CA</span>
    //           <span>$4700</span>
    //           <span>Full-time</span>
    //           <span>67%</span>
    //         </div>
    //         <br />
    //         <div className="flex-row">
    //           <span>Inspector</span>
    //           <span>Quanta Services</span>
    //           <span>Senior</span>
    //           <span>California, CA</span>
    //           <span>$4700</span>
    //           <span>Full-time</span>
    //           <span>67%</span>
    //         </div>
    //         <br />
    //         <div className="flex-row">
    //           <span>Inspector</span>
    //           <span>Quanta Services</span>
    //           <span>Senior</span>
    //           <span>California, CA</span>
    //           <span>$4700</span>
    //           <span>Full-time</span>
    //           <span>67%</span>
    //         </div>
    //         <br />
    //         <div className="flex-row">
    //           <span>Inspector</span>
    //           <span>Quanta Services</span>
    //           <span>Senior</span>
    //           <span>California, CA</span>
    //           <span>$4700</span>
    //           <span>Full-time</span>
    //           <span>67%</span>
    //         </div>
    //         <br />
    //         <div className="flex-row">
    //           <span>Inspector</span>
    //           <span>Quanta Services</span>
    //           <span>Senior</span>
    //           <span>California, CA</span>
    //           <span>$4700</span>
    //           <span>Full-time</span>
    //           <span>67%</span>
    //         </div>
    //         <br />
    //         <div className="flex-row">
    //           <span>Inspector</span>
    //           <span>Quanta Services</span>
    //           <span>Senior</span>
    //           <span>California, CA</span>
    //           <span>$4700</span>
    //           <span>Full-time</span>
    //           <span>67%</span>
    //         </div>
    //         <br />
    //         <div className="flex-row">
    //           <span>Inspector</span>
    //           <span>Quanta Services</span>
    //           <span>Senior</span>
    //           <span>California, CA</span>
    //           <span>$4700</span>
    //           <span>Full-time</span>
    //           <span>67%</span>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="header-element third-section">
    //       <div className="third-section-container">
    //         <span className="third-section-title">Trends</span>
    //       </div>
    //       <div className="box">
    //         <div className="dist-font-size">Matching Distribution</div>
    //         <br />
    //         <div className="pie">
    //           <img src={pie} alt="" />
    //         </div>
    //         <br />
    //         <div className="dist-font-size">Jobs posted over time</div>
    //         <div className="graph">
    //           <img src={graph} alt="" />
    //         </div>
    //       </div>

    //       <h2>My Pending Requests</h2>
    //       <div className="box">
    //         <div className="flex-row">
    //           <div className="header-element">Contractor</div>
    //           <div className="header-element">Role</div>
    //           <div className="header-element">Application Date</div>
    //         </div>
    //         <div className="flex-row">
    //           <span className="header-element">Quanta Services</span>
    //           <span className="header-element">Field Engineer</span>
    //           <span className="header-element">08/11/22</span>
    //           <img className="header-element edit" src={editMore} alt="" />
    //         </div>
    //         <div className="line-separator"></div>
    //         <div className="flex-row">
    //           <span className="header-element">Quanta Services</span>
    //           <span className="header-element">Field Engineer</span>
    //           <span className="header-element">08/11/22</span>
    //           <img className="header-element edit" src={editMore} alt="" />
    //         </div>
    //         <div className="line-separator"></div>
    //         <div className="flex-row">
    //           <span className="header-element">Quanta Services</span>
    //           <span className="header-element">Field Engineer</span>
    //           <span className="header-element">08/11/22</span>
    //           <img className="header-element edit" src={editMore} alt="" />
    //         </div>
    //         <div className="line-separator"></div>
    //         <div className="flex-row">
    //           <span className="header-element">Quanta Services</span>
    //           <span className="header-element">Field Engineer</span>
    //           <span className="header-element">08/11/22</span>
    //           <img className="header-element edit" src={editMore} alt="" />
    //         </div>
    //         <div className="line-separator"></div>
    //         <div className="flex-row">
    //           <span className="header-element">Quanta Services</span>
    //           <span className="header-element">Field Engineer</span>
    //           <span className="header-element">08/11/22</span>
    //           <img className="header-element edit" src={editMore} alt="" />
    //         </div>
    //         <div className="line-separator"></div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};
export default Profile;
