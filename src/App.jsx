import Swithcher from "./Components/Switcher"
import React from "react";
import Button from "@mui/material/Button";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
// import BasicSelect from './Components/SelectCity';
// import { Light } from '@mui/icons-material';
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TextField } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import NorthIcon from "@mui/icons-material/North";
import SellIcon from "@mui/icons-material/Sell";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

let StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const App = () => {
  let data = [
    {
      id: 1,
      img: "src/assets/images/Avatar.png",
      fullName: "Jacob Jones",
      email: "jackson.graham@example.com",
      city: "Dushanbe",
      phone: "88888 0090",
      isComplete: true,
    },
    {
      id: 2,
      img: "src/assets/images/Avatar1.png",
      fullName: "Jenny Wilson",
      email: "jessica.hanson@example.com",
      city: "Kulob",
      phone: "88888 0090",
      isComplete: false,
    },
    {
      id: 3,
      img: "src/assets/images/Avatar2.png",
      fullName: "Guy Hawkins",
      email: "bill.sanders@example.com",
      city: "Dushanbe",
      phone: "88888 0090",
      isComplete: true,
    },
    {
      id: 4,
      img: "src/assets/images/Avata3.png",
      fullName: "Cody Fisher",
      email: "michael.mitc@example.com",
      city: "Bokhtar",
      phone: "88888 0090",
      isComplete: true,
    },
    {
      id: 5,
      img: "src/assets/images/Avatar4.png",
      fullName: "Esther Howard",
      email: "felicia.reid@example.com",
      city: "Kulob",
      phone: "88888 0090",
      isComplete: false,
    },
    {
      id: 6,
      img: "src/assets/images/Avatar5.png",
      fullName: "Ronald Richards",
      email: "tim.jennings@example.com",
      city: "Khujand",
      phone: "88888 0090",
      isComplete: true,
    },
  ];
  let [todolist, setTodolist] = useState(data);

  /// dialog Main
  let [dialogAll, setDialogAll] = useState(false);
  // let [s, setS] = React.useState(false)

  /// select City
  let [selCity, setSelCity] = useState("");

  /// select Sataus
  let [selStatus, setSelStatus] = useState("");

  /// input search
  let [inpSearch, setInpSearch] = useState("");

  /// add
  const [open, setOpen] = useState(false);
  let [inpAddName, setInpAddName] = useState("");
  let [inpAddImg, setInpAddImg] = useState("");
  let [inpAddEmail, setInpAddEmail] = useState("");
  let [inpAddPhone, setInpAddPhone] = useState("");
  let [selAddStatus, setSelAddStatus] = useState("");
  let [selAddCity, setSelAddCity] = useState("");

  /// edit
  let [elemEdit, setElemEdit] = useState(null);
  const [openEdit, setOpenEdit] = useState(false);
  let [inpEditName, setInpEditName] = useState("");
  let [inpEditImg, setInpEditImg] = useState("");
  let [inpEditEmail, setInpEditEmail] = useState("");
  let [inpEditPhone, setInpEditPhone] = useState("");
  let [selEditStatus, setSelEditStatus] = useState("");
  let [selEditCity, setSelEditCity] = useState("");
  let [idx, setIdx] = useState(null);

  /// delete
  let [idDel, setIdDel] = useState(null);

  /// info
  let [openInfo, setOpenInfo] = useState(false);
  let [infoImg, setInfoImg] = useState("");
  let [infoName, setInfoName] = useState("");
  let [infoEmail, setInfoEmail] = useState("");
  let [infoPhone, setInfoPhone] = useState("");
  let [infoStatus, setInfoStatus] = useState("");
  let [infoCity, setInfoCity] = useState("");
  let [elemInfo, setElemInfo] = useState(null);

  /// add
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setInpAddImg("");
    setInpAddName("");
    setInpAddEmail("");
    setInpAddPhone("");
    setSelAddCity("");
    setSelAddStatus("");
  };
  function addUser() {
    let newUser = {
      id: new Date().getTime(),
      img: inpAddImg,
      fullName: inpAddName,
      email: inpAddEmail,
      city: selAddCity,
      phone: inpAddPhone,
      isComplete: selAddStatus == "Active" ? true : false,
    };
    todolist.push(newUser);
    setOpen(false);
  }

  /// delete
  function deleteUser(id) {
    setTodolist(
      todolist.filter((elem) => {
        return elem.id != id;
      })
    );
    setDialogAll(false);
  }

  /// dialogAll
  function showDialogAll(user) {
    setDialogAll(true);
    setIdDel(user.id);
    setElemEdit(user);
    setElemInfo(user);
  }

  /// edit
  function handleCloseEdit() {
    setOpenEdit(false);
  }
  function editShow(user) {
    setOpenEdit(true);
    setInpEditImg(user.img);
    setInpEditName(user.fullName);
    setInpEditEmail(user.email);
    setSelEditCity(user.city);
    setInpEditPhone(user.phone);
    setSelEditStatus(user.isComplete ? "Active" : "Inactive");
    setIdx(user.id);
  }
  function editUser() {
    setTodolist(
      todolist.map((elem) => {
        if (elem.id == idx) {
          elem.img = inpEditImg;
          elem.name = inpEditName;
          elem.email = inpEditEmail;
          elem.city = selEditCity;
          elem.phone = inpEditPhone;
          elem.isComplete = selEditStatus == "Active" ? true : false;
        }
        return elem;
      })
    );
    setOpenEdit(false);
    setDialogAll(false);
  }

  /// info
  function infoUser(user) {
    setOpenInfo(true);
    setDialogAll(false);
    setInfoImg(user.img);
    setInfoName(user.fullName);
    setInfoEmail(user.email);
    setInfoPhone(user.phone);
    setInfoCity(user.city);
    setInfoStatus(
      user.isComplete ? (
        <Button
          variant="contained"
          sx={{ backgroundColor: "green", padding: "6px 24px" }}
        >
          Active
        </Button>
      ) : (
        <Button variant="contained" sx={{ backgroundColor: "#748998" }}>
          Inactive
        </Button>
      )
    );
  }

  return (
    <div className="dark:h-[100vh] dark:bg-black">
      {/* add dialog */}
      <React.Fragment>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <div className="flex items-center justify-between">
            <DialogTitle>{"Add User"}</DialogTitle>
            <CloseIcon
              sx={{ marginRight: "20px", cursor: "pointer" }}
              onClick={() => handleClose()}
            />
          </div>
          <DialogContent sx={{ width: "500px" }}>
            <DialogContentText id="alert-dialog-slide-description">
              {/* inpAddImg */}
              <TextField
                sx={{ marginTop: "10px", width: "450px" }}
                id="outlined-basic"
                label="png/ .jpg/ .jpge"
                variant="outlined"
                value={inpAddImg}
                onChange={(event) => setInpAddImg(event.target.value)}
              />
              {/* inpAddName */}
              <TextField
                sx={{ marginTop: "10px", width: "450px" }}
                id="outlined-basic"
                label="Full Name"
                variant="outlined"
                value={inpAddName}
                onChange={(event) => setInpAddName(event.target.value)}
              />
              {/* inpAddEmail */}
              <TextField
                sx={{ marginTop: "10px", width: "450px" }}
                id="outlined-basic"
                label="Email"
                variant="outlined"
                value={inpAddEmail}
                onChange={(event) => setInpAddEmail(event.target.value)}
              />
              {/* selAddSatus */}
              <Box>
                <FormControl
                  sx={{
                    width: "450px",
                    marginTop: "10px",
                    borderRadius: "5px",
                  }}
                >
                  <InputLabel
                    id="demo-simple-select-label"
                    sx={{ color: "black" }}
                  >
                    Choose status
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    sx={{ color: "black" }}
                    label="Age"
                    value={selAddStatus}
                    onChange={(event) => setSelAddStatus(event.target.value)}
                  >
                    <MenuItem value={"Active"}>Active</MenuItem>
                    <MenuItem value={"Inactive"}>Inactive</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              {/* selAddCity */}
              <Box>
                <FormControl
                  sx={{
                    width: "450px",
                    marginTop: "10px",
                    borderRadius: "5px",
                  }}
                >
                  <InputLabel
                    id="demo-simple-select-label"
                    sx={{ color: "black" }}
                  >
                    Choose city
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    sx={{ color: "black" }}
                    label="Age"
                    value={selAddCity}
                    onChange={(event) => setSelAddCity(event.target.value)}
                  >
                    <MenuItem value={"Dushanbe"}>Dushanbe</MenuItem>
                    <MenuItem value={"Kulob"}>Kulob</MenuItem>
                    <MenuItem value={"Bokhtar"}>Bokhtar</MenuItem>
                    <MenuItem value={"Khujand"}>Khujand</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              {/* inpAddPhone */}
              <TextField
                sx={{ marginTop: "10px", width: "450px" }}
                id="outlined-basic"
                label="Phone"
                variant="outlined"
                value={inpAddPhone}
                onChange={(event) => setInpAddPhone(event.target.value)}
              />
            </DialogContentText>
          </DialogContent>
          <DialogActions sx={{ marginRight: "20px" }}>
            <Button onClick={() => addUser()}>Save</Button>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
      {/* edit dialog */}
      <React.Fragment>
        <Dialog
          open={openEdit}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleCloseEdit}
          aria-describedby="alert-dialog-slide-description"
        >
          <div className="flex items-center justify-between">
            <DialogTitle>{"Edit User"}</DialogTitle>
            <CloseIcon
              sx={{ marginRight: "20px", cursor: "pointer" }}
              onClick={() => handleCloseEdit()}
            />
          </div>
          <DialogContent sx={{ width: "500px" }}>
            <DialogContentText id="alert-dialog-slide-description">
              {/* inpEditImg */}
              <TextField
                sx={{ marginTop: "10px", width: "450px" }}
                id="outlined-basic"
                label="png/ .jpg/ .jpge"
                variant="outlined"
                value={inpEditImg}
                onChange={(event) => setInpEditImg(event.target.value)}
              />
              {/* inpEditName */}
              <TextField
                sx={{ marginTop: "10px", width: "450px" }}
                id="outlined-basic"
                label="Full Name"
                variant="outlined"
                value={inpEditName}
                onChange={(event) => setInpEditName(event.target.value)}
              />
              {/* inpEditEmail */}
              <TextField
                sx={{ marginTop: "10px", width: "450px" }}
                id="outlined-basic"
                label="Email"
                variant="outlined"
                value={inpEditEmail}
                onChange={(event) => setInpEditEmail(event.target.value)}
              />
              {/* selEditSatus */}
              <Box>
                <FormControl
                  sx={{
                    width: "450px",
                    marginTop: "10px",
                    borderRadius: "5px",
                  }}
                >
                  <InputLabel
                    id="demo-simple-select-label"
                    sx={{ color: "black" }}
                  >
                    Choose status
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    sx={{ color: "black" }}
                    label="Age"
                    value={selEditStatus}
                    onChange={(event) => setSelEditStatus(event.target.value)}
                  >
                    <MenuItem value={"Active"}>Active</MenuItem>
                    <MenuItem value={"Inactive"}>Inactive</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              {/* selEditCity */}
              <Box>
                <FormControl
                  sx={{
                    width: "450px",
                    marginTop: "10px",
                    borderRadius: "5px",
                  }}
                >
                  <InputLabel
                    id="demo-simple-select-label"
                    sx={{ color: "black" }}
                  >
                    Choose city
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    sx={{ color: "black" }}
                    label="Age"
                    value={selEditCity}
                    onChange={(event) => setSelEditCity(event.target.value)}
                  >
                    <MenuItem value={"Dushanbe"}>Dushanbe</MenuItem>
                    <MenuItem value={"Kulob"}>Kulob</MenuItem>
                    <MenuItem value={"Bokhtar"}>Bokhtar</MenuItem>
                    <MenuItem value={"Khujand"}>Khujand</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              {/* inpEditPhone */}
              <TextField
                sx={{ marginTop: "10px", width: "450px" }}
                id="outlined-basic"
                label="Phone"
                variant="outlined"
                value={inpEditPhone}
                onChange={(event) => setInpEditPhone(event.target.value)}
              />
            </DialogContentText>
          </DialogContent>
          <DialogActions sx={{ marginRight: "20px" }}>
            <Button onClick={() => editUser()}>Save</Button>
            <Button onClick={handleCloseEdit}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
      {/* info dialog */}
      {openInfo ? (
        <Box
          sx={{
            width: "400px",
            boxShadow: "1px 1px 10px black",
            height: "100vh",
            position: "fixed",
            right: "0",
            zIndex: "2",
            backgroundColor: "white",
          }}
          role="presentation"
          onClick={() => setOpenInfo(false)}
          onKeyDown={() => setOpenInfo(false)}
        >
          <List>
            <ListItem sx={{display:"flex", flexDirection:"column"}}>
              <div className="flex justify-between w-[350px] m-[20px]">
                <h1 onClick={() => setOpenInfo(false)} className="text-[20px] text-black font-[500]">About User</h1>
                <CloseIcon />
              </div>
              <ListItemIcon sx={{display:"flex" , flexDirection:"column", textAlign:"center", marginLeft:"20px"}}>
                <img className="w-[250px]" src={infoImg} alt="" />
                <h1 className="text-[30px] text-black font-[600]">{infoName}</h1>
                <p>{infoEmail}</p>
              </ListItemIcon>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <div className="flex items-center justify-between w-[400px]">
                <div>
                  <h1 className="text-[20px] text-black font-[600] m-[5px]">City</h1>
                  <h1 className="text-[20px] text-black font-[600] m-[5px]">Status</h1>
                  <h1 className="text-[20px] text-black font-[600] m-[5px]">Phone</h1>
                </div>
                <div>
                  <h1 className="text-[20px] text-black font-[600]">{infoCity}</h1>
                  <h1 className="my-[5px]">{infoStatus}</h1>
                  <h1 className="text-[20px] text-black font-[600]">{infoPhone}</h1>
                </div>
              </div>
            </ListItem>
          </List>

          <List>
            <ListItem>
            <Button
            variant="outlined"
            onClick={() => editShow(elemEdit)}
            // sx={{ color: "black", padding: "15px 35px", paddingRight: "107px" }}
            startIcon={<EditIcon />}
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            onClick={() => deleteUser(idDel)}
            color="error"
            sx={{ marginLeft:"20px"}}
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
            </ListItem>
          </List>
        </Box>
      ) : null}

      <header>
        <nav className="flex p-[30px] items-center justify-between">
          <h1 className="text-[40px] font-[600] dark:text-white">User List</h1>
          <div className="mr-[50px] flex items-center gap-[50px]">
            {/* btn add */}
            <Button
              sx={{ padding: "6px 20px" }}
              variant="contained"
              onClick={handleClickOpen}
            >
              NEW +
            </Button>
            <Button variant="outlined"><Swithcher /> </Button>
          </div>
        </nav>
        <section className="flex pl-[30px] justify-between pr-[80px]">
          <div className="flex items-center gap-[30px]">
            {/* select status */}
            <Box>
              <FormControl sx={{ width: "250px", borderRadius: "5px"}} className="dark:text-white">
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{ color: "black" }}
                >
                  Status
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selStatus}
                  sx={{ color: "black" }}
                  label="Age"
                  onChange={(event) => setSelStatus(event.target.value)}
                >
                  <MenuItem value={""}>All satate</MenuItem>
                  <MenuItem value={"Active"}>Active</MenuItem>
                  <MenuItem value={"Inactive"}>Inactive</MenuItem>
                </Select>
              </FormControl>
            </Box>
            {/* select city */}
            <Box>
              <FormControl sx={{ width: "250px", borderRadius: "5px" }}>
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{ color: "black" }}
                >
                  City
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selCity}
                  sx={{ color: "black" }}
                  label="Age"
                  onChange={(event) => setSelCity(event.target.value)}
                >
                  <MenuItem value={""}>All city</MenuItem>
                  <MenuItem value={"Dushanbe"}>Dushanbe</MenuItem>
                  <MenuItem value={"Kulob"}>Kulob</MenuItem>
                  <MenuItem value={"Bokhtar"}>Bokhtar</MenuItem>
                  <MenuItem value={"Khujand"}>Khujand</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          {/* input search */}
          <Box component="form" noValidateautoComplete="off">
            <TextField
              id="outlined-basic"
              value={inpSearch}
              onChange={(event) => setInpSearch(event.target.value)}
              sx={{ width: "250px" }}
              label="Search"
              variant="outlined"
            />
            <SearchIcon
              sx={{
                fontSize: "35px",
                position: "absolute",
                right: "95px",
                top: "130px",
                color: "gray",
              }}
            />
          </Box>
        </section>
      </header>
      <main>
        <table className="m-[30px] mt-[50px]">
          <tr className="bg-gray-200 dark:bg-gray-800 dark:text-gray-300">
            <th className="text-[20px] pl-[20px] py-[6px] pr-[330px]">
              <PersonIcon sx={{ marginBottom: "3px", fontSize: "25px" }} /> Name
            </th>
            <th className="text-[20px] py-[6px] pr-[250px]">
              <LockIcon sx={{ marginBottom: "3px", fontSize: "20px" }} /> City
            </th>
            <th className="text-[20px] py-[6px] pr-[190px]">
              <AccessTimeFilledIcon
                sx={{ marginBottom: "3px", fontSize: "20px" }}
              />{" "}
              Sataus{" "}
              <NorthIcon sx={{ marginBottom: "3px", fontSize: "25px" }} />
            </th>
            <th className="text-[20px] py-[6px] pr-[180px]">
              <SellIcon sx={{ marginBottom: "3px", fontSize: "25px" }} /> Phone
            </th>
            <th className="py-[6px] pr-[50px]"></th>
          </tr>
          {/* get */}
          {todolist
            .filter((elem) =>
              selStatus == "Active"
                ? elem.isComplete == true
                : selStatus == "Inactive"
                ? elem.isComplete == false
                : elem
            )
            .filter((elem) =>
              elem.city
                .toLowerCase()
                .trim()
                .includes(selCity.toLowerCase().trim())
            )
            .filter((elem) =>
              elem.fullName
                .toLowerCase()
                .trim()
                .includes(inpSearch.toLowerCase().trim())
            )
            .map((elem) => {
              return (
                <tr key={elem.id}>
                  <td className="flex dark:bg-gray-900 dark:text-white px-[20px] py-[10px] border-b-2 gap-[15px] bg-gray-50">
                    {elem.isComplete ? (
                      <StyledBadge
                        overlap="circular"
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "right",
                        }}
                        variant="dot"
                      >
                        <img
                          src={elem.img}
                          className="w-[60px] rounded-[50%]"
                          alt=""
                        />
                      </StyledBadge>
                    ) : (
                      <img
                        src={elem.img}
                        className="w-[60px] rounded-[50%]"
                        alt=""
                      />
                    )}
                    <div>
                      <h3 className="text-[20px] font-[600]">
                        {elem.fullName}
                      </h3>
                      <p className="text-gray-400">{elem.email}</p>
                    </div>
                  </td>
                  <td className="text-[18px] dark:bg-gray-900 dark:text-white border-b-2 bg-gray-50 p-[10px]">
                    {elem.city}
                  </td>
                  <td className="p-[10px] bg-gray-50 border-b-2 dark:bg-gray-900">
                    {elem.isComplete ? (
                      <Button
                        variant="contained"
                        sx={{ backgroundColor: "green", padding: "6px 24px" }}
                      >
                        Active
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        sx={{ backgroundColor: "#748998" }}
                      >
                        Inactive
                      </Button>
                    )}
                  </td>
                  <td className="p-[10px] bg-gray-50 border-b-2 dark:bg-gray-900 dark:text-white">
                    {elem.phone}
                  </td>
                  <td className="p-[10px] bg-gray-50 border-b-2 dark:bg-gray-900">
                    <Button
                      sx={{ color: "black" }}
                      onClick={() => showDialogAll(elem)}
                    >
                      {" "}
                      <MoreHorizIcon sx={{ fontSize: "35px" }} />{" "}
                    </Button>
                  </td>
                </tr>
              );
            })}
        </table>
      </main>
      {dialogAll ? (
        <div className="absolute top-[400px] right-[200px] w-[200px] bg-gray-50 rounded shadow-2xl text-start">
          <Button
            variant="text"
            onClick={() => infoUser(elemInfo)}
            sx={{ color: "black", padding: "15px 35px" }}
            startIcon={<AccountCircleIcon />}
          >
            View profile
          </Button>
          <SwipeableDrawer
            anchor={"right"}
            open={openInfo}
            onClose={() => setOpenInfo(false)}
            onOpen={() => setOpenInfo(false)}
          >
            {/* {list()} */}
          </SwipeableDrawer>
          <Button
            variant="text"
            onClick={() => editShow(elemEdit)}
            sx={{ color: "black", padding: "15px 35px", paddingRight: "107px" }}
            startIcon={<EditIcon />}
          >
            Edit
          </Button>
          <Button
            variant="text"
            onClick={() => deleteUser(idDel)}
            color="error"
            sx={{ padding: "15px 35px", paddingRight: "83px" }}
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default App;
