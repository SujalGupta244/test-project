import React from "react";
import CusBox from "./CusBox";
import {
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormGroup,
  Checkbox,
  TextField,
  FormControl,
  Input,
  MenuItem,
  Select,
  InputLabel,
  Button,
  Link,
} from "@mui/material";
import { BsUpload } from "react-icons/bs";
import { PiAsteriskSimpleBold } from "react-icons/pi";

import {
  createTheme,
  alpha,
  getContrastRatio,
  ThemeProvider,
} from "@mui/material/styles";

const theme = createTheme({
  palette: {
    violet: {
      main: alpha("#673AB7", 1),
      contrastText: getContrastRatio("#673AB7", "#fff") > 4.5 ? "#fff" : "#111",
    },
  },
});

const Form = () => {
  const selectValues = ["option1", "option2", "option3"];
  const counts = [1, 2, 3, 4, 5];
  return (
    <ThemeProvider theme={theme}>
      <FormControl className="">
        <CusBox>
          <FormLabel className="flex text-black" color={"info"}>
            MCQ <PiAsteriskSimpleBold className="text-xs text-red-600" />
          </FormLabel>
          <RadioGroup
          // aria-labelledby="demo-radio-buttons-group-label"
          // defaultValue="female"
          // name="radio-buttons-group"
          >
            {selectValues.map((value) => (
              <FormControlLabel
                value={value}
                control={<Radio />}
                label={value}
              />
            ))}
          </RadioGroup>
        </CusBox>
        <CusBox>
          <FormLabel className="flex text-black" color={"info"}>
            Checkbox <PiAsteriskSimpleBold className="text-xs text-red-600" />
          </FormLabel>
          <FormGroup>
            {selectValues.map((value) => (
              <FormControlLabel control={<Checkbox />} label={value} />
            ))}
          </FormGroup>
        </CusBox>
        <CusBox>
          <FormLabel className="flex text-black" color={"info"}>
            Short Answer{" "}
            <PiAsteriskSimpleBold className="text-xs text-red-600" />
          </FormLabel>
          {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
          <Input defaultValue="Hello world" />
        </CusBox>
        <CusBox>
          <FormLabel className="flex text-black" color={"info"}>
            ParaGraph <PiAsteriskSimpleBold className="text-xs text-red-600" />
          </FormLabel>
          {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
          <Input defaultValue="Hello world" />
        </CusBox>
        <CusBox>
          <FormLabel className="flex text-black" color={"info"}>
            Drop down <PiAsteriskSimpleBold className="text-xs text-red-600" />
          </FormLabel>
          <Select
            // value={age}
            // onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            {selectValues.map((value) => (
              <MenuItem value={value}>{value}</MenuItem>
            ))}
          </Select>
        </CusBox>
        <CusBox>
          <FormLabel className="flex text-black" color={"info"}>
            File Upload{" "}
            <PiAsteriskSimpleBold className="text-xs text-red-600" />
          </FormLabel>
          <Button
            variant="outlined"
            component="label"
            className="w-36 border flex items-center justify-between"
          >
            <BsUpload className="h-4 w-4" />
            Add file
            <input type="file" hidden />
          </Button>
        </CusBox>
        <CusBox>
          <FormLabel className="flex text-black" color={"info"}>
            Linear Scale{" "}
            <PiAsteriskSimpleBold className="text-xs text-red-600" />
          </FormLabel>
          <div className="lg:flex items-center justify-center">
            <h4 className="mr-6">Worst</h4>
            <RadioGroup
              row
              // aria-labelledby="demo-radio-buttons-group-label"
              // defaultValue="female"
              // name="radio-buttons-group"
            >
              {counts.map((value) => (
                <FormControlLabel
                  value={value}
                  control={<Radio />}
                  label={value}
                  labelPlacement={"top"}
                />
              ))}
            </RadioGroup>
            <h4 className="ml-6">Best</h4>
          </div>
        </CusBox>
        <CusBox>
          <FormLabel className="flex text-black" color={"info"}>
            Multi choice Grid
            <PiAsteriskSimpleBold className="text-xs text-red-600" />
          </FormLabel>
          <div className="flex items-center justify-end mr-10 mb-4">
            <h3 className="mx-6">Column1</h3>
            <h3 className="mx-6">Column2</h3>
            <h3 className="mx-6">Column3</h3>
          </div>
          <div className="flex items-center justify-between mr-6 bg-gray-50 px-2 py-1 rounded-sm">
            <h4 className="">Row</h4>
            <RadioGroup
              row
            >
              {selectValues.map((value) => (
                <div className="mx-10">
                    <Radio />
                </div>
              ))}
            </RadioGroup>
          </div>
          <div className="flex items-center justify-between mr-6 bg-gray-50 px-2 py-1 rounded-sm mt-1">
            <h4 className="">Row 2</h4>
            <RadioGroup
              row
              
            >
              {selectValues.map((value) => (
                <div className="mx-10">
                    <Radio />
                </div>
              ))}
            </RadioGroup>
          </div>
          <div className="flex items-center justify-between mr-6 bg-gray-50 px-2 py-1 rounded-sm mt-1">
            <h4 className="">Row 2</h4>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              {selectValues.map((value) => (
                <div className="mx-10">
                    <Radio />
                </div>
              ))}
            </RadioGroup>
          </div>
        </CusBox>
        <CusBox>
          <FormLabel className="flex text-black" color={"info"}>
            Tick box Grid
            <PiAsteriskSimpleBold className="text-xs text-red-600" />
          </FormLabel>

          <div className="flex">
            <h4 className="mr-6">Row</h4>

            <FormGroup row>
              {selectValues.map((value) => (
                <FormControlLabel control={<Checkbox />} />
              ))}
            </FormGroup>
          </div>
          <div className="flex">
            <h4 className="mr-6">Row</h4>

            <FormGroup row>
              {selectValues.map((value) => (
                <FormControlLabel control={<Checkbox />} />
              ))}
            </FormGroup>
          </div>
          <div className="flex">
            <h4 className="mr-6">Row</h4>

            <FormGroup row>
              {selectValues.map((value) => (
                <FormControlLabel control={<Checkbox />} />
              ))}
            </FormGroup>
          </div>
        </CusBox>
        <div className="flex items-center justify-between">
          <Button
            variant="contained"
            size="medium"
            color={"violet"}
            className="w-32"
          >
            Submit
          </Button>
          <div className="flex items-center">
            <div className="w-48 h-2.5 bg-green-600 rounded-md" />
            &nbsp;
            <p>Page 1 of 1</p>
          </div>
          <h4 className="text-[#673AB7]">Clear Form</h4>
        </div>
        <p className="text-xs mt-6 mb-2">
          Never submit passwords through Google Forms.
        </p>
        <div className="flex text-xs justify-center">
          <p>This content is neither created nor endorsed by Google.</p>
          &nbsp;
          <div className="flex">
            <Link
              // color="gray"
              className="text-gray-400"
              onClick={() => {
                console.info("I'm a button.");
              }}
            >
              Report Abuse
            </Link>
            &nbsp; - &nbsp;
            <Link
              onClick={() => {
                console.info("I'm a button.");
              }}
            >
              Terms of Service
            </Link>
            &nbsp; - &nbsp;
            <Link
              onClick={() => {
                console.info("I'm a button.");
              }}
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </FormControl>
    </ThemeProvider>
  );
};

export default Form;
