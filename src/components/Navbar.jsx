
import logo from "../Assets/ChillZoneGame-Logo.jpeg"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import "../CSS/Main.css"
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../slices/profileSlice'
import { CiMenuBurger } from "react-icons/ci";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';




// const pages = ['Products', 'Pricing', 'Blog'];
const pages = [
  {
    name: "Home",
    link: "/"
  },
  {
    name: "Games",
    link: "/games"
  },
  {
    name: "About Us",
    link: "/aboutUs"
  },
  {
    name: "Contact Us",
    link: "/contactUs"
  },
]

const settings = [
  {
    name: "Dashboard",
    link: "/dashboard"
  },
  {
    name: "Profile",
    link: "/dashboard/myprofile/editProfile"
  },
  {
    name: "Log Out",
    link: "/"
  },

]
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export const Navbar = () => {
  const { token } = useSelector(state => state.auth)
  const { user, userProfilePic } = useSelector(state => state.profile)
  const navigate = useNavigate()
  // console.log(localStorage.getItem("user"))
  // const dispatch = useDispatch()
  //  const  profilePic = JSON.parse(localStorage.getItem("profilePic")) 
  // dispatch(setUser(userInfo))
  const location = useLocation()
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleNavigateManu = (link) => {
    navigate(link)
    setAnchorElNav(null);
  };


  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleProfileHandler = (name, link) => {
    if (name === "Log Out") {
      localStorage.clear()
      setAnchorElUser(null);
      navigate(link)
    }
    else {
      setAnchorElUser(null);
      navigate(link)
    }

  };


  return (
    <div className='w-full'>
      <div className='md:flex justify-between items-center p-2 hidden'>
        <div className=' w-[94px]'>
          <img src={logo} className='rounded-lg' />
        </div>
        <div className=''>
          <ul className='flex justify-center items-center gap-8'>
            <Link to="/">
              <li className={`${location.pathname === "/" ? "activeBtn" : "text-white"}  activeBtnHover cursor-pointer`}>Home</li>
            </Link>
            <Link to="/games">
              <li className={`${location.pathname === "/games" ? "activeBtn" : "text-white"} activeBtnHover cursor-pointer`}>Games</li>
            </Link>
            <Link to="/aboutUs">
              <li className={`${location.pathname === "/aboutUs" ? "activeBtn" : "text-white"} activeBtnHover cursor-pointer`}>About Us</li>
            </Link>

            <Link to="/contactUs">
              <li className={`${location.pathname === "/contactUs" ? "activeBtn" : "text-white"} activeBtnHover cursor-pointer`}>Contact Us</li>
            </Link>
          </ul>
        </div>
        {
          token ?
            <div className='flex justify-center items-center gap-8'>
              <Link to="/dashboard">
                <div className='text-white  flex justify-center items-center py-2 px-4  getInDetailBtn rounded-lg cursor-pointer'>Dashboard</div>
              </Link>

              <div>
                <Link to="/dashboard/myprofile/">
                  <img
                    src={userProfilePic}
                    className='w-[35px] rounded-full'
                  />
                </Link>
              </div>

            </div>
            :
            <div className='flex justify-center items-center gap-8'>
              <Link to="/login">
                <div className='text-white  flex justify-center items-center py-2 px-4  getInDetailBtn rounded-lg cursor-pointer'>Log In</div></Link>
              <Link to="/signup">
                <div className='text-white  flex justify-center items-center py-2 px-4  getInDetailBtn rounded-lg cursor-pointer'> Sign Up</div>
              </Link>
            </div>
        }


      </div>

      <div className="md:hidden">
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                LOGO
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {/* {pages.map((page,index) => ( */}
                  <MenuItem onClick={() => handleNavigateManu("/")}>
                    <Typography textAlign="center" href="/">Home</Typography>
                  </MenuItem>
                  <MenuItem onClick={() => handleNavigateManu("/games")}>
                    <Typography textAlign="center" href="/games">Games</Typography>
                  </MenuItem>
                  <MenuItem onClick={() => handleNavigateManu("/aboutUs")}>
                    <Typography textAlign="center" href="/aboutUs">About Us</Typography>
                  </MenuItem>
                  <MenuItem onClick={() => handleNavigateManu("/contactUs")}>
                    <Typography textAlign="center" href="/contactUs">Contact Us</Typography>
                  </MenuItem>
                  {/* ))} */}
                </Menu>
              </Box>
              {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                <div className=' w-[94px]'>
                  <img src={logo} className='rounded-lg' />
                </div>
              </Typography>
              {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
             {pages.map((page,index) => (
               <Button
                 key={index}
                 onClick={handleCloseNavMenu}
                 sx={{ my: 2, color: 'white', display: 'block' }}
               >
                 {page.name}
               </Button>
             ))}
           </Box> */}

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src={userProfilePic} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {/* {settings.map((setting,index) => ( */}
                  {
                    token && <MenuItem onClick={() => handleProfileHandler("Dashboard", "/dashboard")}>
                      <Typography textAlign="center">Dashboard</Typography>
                    </MenuItem>
                  }

                  {
                    token && <MenuItem onClick={() => handleProfileHandler("Profile", "/dashboard/myprofile/editProfile")}>
                      <Typography textAlign="center">Profile</Typography>
                    </MenuItem>
                  }

                  {
                    token && <MenuItem onClick={() => handleProfileHandler("Log Out", "/")}>
                      <Typography textAlign="center">Log Out</Typography>
                    </MenuItem>
                  }
                   {
                    !token && <MenuItem onClick={() => handleProfileHandler("Sign In", "/login")}>
                      <Typography textAlign="center">Sign In</Typography>
                    </MenuItem>
                  }
                   {
                    !token && <MenuItem onClick={() => handleProfileHandler("Sign Up", "/signup")}>
                      <Typography textAlign="center">Sign Up</Typography>
                    </MenuItem>
                  }

                  {/* ))} */}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </div>

      {/* <div className='flex justify-between items-center py-1 border'>
                <div className=' w-[94px] border'>
                    <img src={logo} className='rounded-lg' />
                </div>
                <div className=''>
                    <CiMenuBurger className='text-4xl font-bold'/>
                </div>
            </div>
            <div className='bg-[#070320] fixed left-0 top-0 w-full h-[50vh] flex justify-center items-center z-10 border'>
                <ul>
                    <li className='text-2xl p-2'>Home</li>
                    <li className='text-2xl p-2'>Games</li>
                    <li className='text-2xl p-2'>About Us</li>
                    <li className='text-2xl p-2'> Contact Us</li>
                </ul>
            </div> */}
    </div>
  )
}




// const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// export const Navbar = () => {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             LOGO
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: 'flex', md: 'none' },
//               flexGrow: 1,
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             LOGO
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>

//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center">{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
