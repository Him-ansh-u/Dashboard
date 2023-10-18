import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Box,
  Typography,
  TextField,
  Select,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { SearchOutlined } from "@mui/icons-material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";
import { tokens } from "../../theme";

const tableData = [
  {
    picture:
      "https://media.istockphoto.com/id/1387645173/video/soft-wavy-shapes-trendy-modern-abstract-background-3d-loop-animation.jpg?s=640x640&k=20&c=doAkgD1nCzjYF7qRvgtTPvrG6wud5z1jJxmfFLCcUnk=",
    name: "Abstract 3d",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    stock: "32",
    price: "$45.99",
    totalSale: "20",
  },
  {
    picture:
      "https://ugc.futurelearn.com/uploads/images/f4/5b/regular_f45bd036-8472-4989-9671-1a5618b23b99.jpg",
    name: "Sarphens Illustration",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    stock: "32",
    price: "$45.99",
    totalSale: "20",
  },
];

export const ProductSell = () => {
  const isNonMobile = useMediaQuery("(min-width:1000px)");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [rows, setRows] = useState(tableData);
  const [searched, setSearched] = useState();

  const requestSearch = (searchedVal) => {
    const filteredRows = tableData.filter((row) => {
      return row.name.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

  return (
    <>
      {isNonMobile ? (
        <>
          <Box
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            bgcolor={colors.white[900]}
            borderRadius='10px 10px 0px 0px'
            p='10px 20px 0px 30px'
            m='20px 0px 0px 0px '>
            <Typography fontWeight='bold'>Products Sell</Typography>
            <Box display='flex'>
              <TextField
                variant='outlined'
                placeholder='Search'
                onChange={(e) => requestSearch(e.target.value)}
                size='small'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <SearchOutlined />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& fieldset": { border: "none" },
                }}
              />
              <FormControl size='small' sx={{ width: "100px" }}>
                <InputLabel id='demo-simple-select-label'></InputLabel>
                <Select sx={{ "& fieldset": { border: "none" } }}>
                  <MenuItem value='30DAYS'>LAST 30 days</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>

          {/* Table */}
          <Box>
            <TableContainer component={Paper}>
              <Table sx={{ minwidth: 650 }} aria-label='simple table'>
                <TableHead sx={{ height: "20px" }}>
                  <TableRow>
                    <TableCell>Product Name</TableCell>
                    <TableCell align='right'>Stock</TableCell>
                    <TableCell align='right'>Price</TableCell>
                    <TableCell align='right'>Total Sale</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((item, key) => {
                    return <TableContent content={item} key={key} />;
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </>
      ) : (
        <Box width='100%'>
          <Box
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            bgcolor={colors.white[900]}
            width='110%'
            borderRadius='10px 10px 0px 0px'
            p='10px'
            m='20px 0px 0px -63px '>
            <Typography fontWeight='bold'>Products Sell</Typography>
            <Box width='150px' display='flex'>
              <TextField
                variant='outlined'
                placeholder='Search'
                onChange={(e) => requestSearch(e.target.value)}
                size='small'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <SearchOutlined />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& fieldset": { border: "none" },
                }}
              />
              <FormControl size='small' sx={{ width: "100px" }}>
                <InputLabel id='demo-simple-select-label'>Select</InputLabel>
                <Select sx={{ "& fieldset": { border: "none" } }}>
                  <MenuItem value='30DAYS'>LAST 30 days</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>

          {/* Table */}
          <Box ml='-60px' width='320px' fontSize='8px'>
            <TableContainer component={Paper}>
              <Table sx={{ minwidth: 650 }} aria-label='simple table'>
                <TableHead sx={{ height: "10px" }}>
                  <TableRow>
                    <TableCell>Product Name</TableCell>
                    <TableCell align='right'>Stock</TableCell>
                    <TableCell align='right'>Price</TableCell>
                    <TableCell align='right'>Total Sale</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((item, key) => {
                    return <TableContent content={item} key={key} />;
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      )}
    </>
  );
};

const TableContent = (props) => {
  const isNonMobile = useMediaQuery("(min-width:1000px)");
  return (
    <>
      {isNonMobile ? (
        <TableRow
          sx={{
            "&:last-child td, &:last-child th": { border: 0, height: "10px" },
          }}>
          <TableCell component='th' scope='row'>
            <Box display='flex'>
              <Box
                height='30px'
                width='40px'
                borderRadius='10px'
                overflow='hidden'>
                <img height='30px' width='40px' src={props.content.picture} />
              </Box>
              <Box>
                <Typography fontSize='13px'>{props.content.name}</Typography>
                <Typography fontSize='10px' marginTop='-3px' color='grey'>
                  {props.content.description}
                </Typography>
              </Box>
            </Box>
          </TableCell>
          <TableCell align='right'>{props.content.stock}</TableCell>
          <TableCell align='right'>{props.content.price}</TableCell>
          <TableCell align='right'>{props.content.totalSale}</TableCell>
        </TableRow>
      ) : (
        <TableRow
          sx={{
            "&:last-child td, &:last-child th": { border: 0, width: "10px" },
          }}>
          <TableCell component='th' scope='row'>
            <Box>
              <Box
                height='30px'
                width='40px'
                borderRadius='10px'
                overflow='hidden'>
                <img height='30px' width='40px' src={props.content.picture} />
              </Box>
              <Box>
                <Typography fontSize='10px'>{props.content.name}</Typography>
                <Typography fontSize='8px' marginTop='-3px' color='grey'>
                  {props.content.description}
                </Typography>
              </Box>
            </Box>
          </TableCell>
          <TableCell align='right'>{props.content.stock}</TableCell>
          <TableCell align='right'>{props.content.price}</TableCell>
          <TableCell align='right'>{props.content.totalSale}</TableCell>
        </TableRow>
      )}
    </>
  );
};
