import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import { tokens } from "../theme";
export const SummarySection = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:1000px)");
  return (
    <Box>
      {isNonMobile ? (
        <Box
          height='100px'
          display='flex'
          justifyContent='space-between'
          alignItems='center'>
          <SummaryContent
            section='Earnning'
            icon={<CurrencyExchangeOutlinedIcon fontSize='' />}
            money='$198k'
            bg='#DEFFEE'
            profit='37.8%'
            color='#00A643'
          />
          <SummaryContent
            section='Orders'
            icon={<ArticleOutlinedIcon fontSize='' />}
            money='$2.4k'
            loss='2%'
            bg='#E7DBFF'
            color='#A505FF'
          />

          <SummaryContent
            section='Balance'
            icon={<AccountBalanceWalletOutlinedIcon fontSize='' />}
            money='$2.4k'
            loss='2%'
            bg='#CCF2FF'
            color='#2D6CC9'
          />
          <SummaryContent
            section='Total Sales'
            icon={<LocalMallOutlinedIcon fontSize='' />}
            money='$89k'
            bg='#FFB3DA'
            profit='11%'
            color='#DA080A'
          />
        </Box>
      ) : (
        <Box
          ml='-22px'
          padding='5px 5px 10px 5px '
          height='200px'
          display='flex'
          flexDirection='column'
          justifyContent='space-between'
          width='100%'>
          <Box display='flex' justifyContent='space-around'>
            <SummaryContent
              section='Earnning'
              icon={<CurrencyExchangeOutlinedIcon fontSize='' />}
              money='$198k'
              bg='#DEFFEE'
              profit='37.8%'
              color='#00A643'
            />
            <SummaryContent
              section='Orders'
              icon={<ArticleOutlinedIcon fontSize='' />}
              money='$2.4k'
              loss='2%'
              bg='#E7DBFF'
              color='#A505FF'
            />
          </Box>
          <Box display='flex' justifyContent='space-around'>
            <SummaryContent
              section='Balance'
              icon={<AccountBalanceWalletOutlinedIcon fontSize='' />}
              money='$2.4k'
              loss='2%'
              bg='#CCF2FF'
              color='#2D6CC9'
            />
            <SummaryContent
              section='Total Sales'
              icon={<LocalMallOutlinedIcon fontSize='' />}
              money='$89k'
              bg='#FFB3DA'
              profit='11%'
              color='#DA080A'
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};

const SummaryContent = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:1000px)");
  return (
    <>
      {isNonMobile ? (
        <Box
          height='90px'
          display='flex'
          justifyContent='space-around'
          alignItems='center'
          width='23%'
          padding='10px 25px 10px 25px'
          bgcolor={colors.white[900]}
          borderRadius='10px'>
          <Box
            height='70px'
            width='70px'
            display='flex'
            justifyContent='center'
            alignItems='center'
            bgcolor={props.bg}
            borderRadius='50px'
            color={props.color}
            fontSize='40px'>
            {props.icon}
          </Box>
          <Box>
            <Typography fontSize='10px'>{props.section}</Typography>
            <Typography variant='h3'>{props.money}</Typography>
            <Typography
              fontSize='10px'
              sx={{ display: "flex", justifyContent: "center" }}>
              <Typography
                fontSize='10px'
                fontWeight='bold'
                color={props.profit ? "#009944" : "red"}>
                {props.profit ? "↑" : "↓"}
                {props.profit ? props.profit : props.loss}
              </Typography>
              <Typography fontSize='10px'>this month</Typography>
            </Typography>
          </Box>
        </Box>
      ) : (
        <Box
          height='90px'
          display='flex'
          justifyContent='space-around'
          alignItems='center'
          width='48%'
          padding='10px'
          bgcolor={colors.white[900]}
          borderRadius='10px'>
          <Box
            height='60px'
            width='70px'
            p='10px'
            fontSize='20px'
            display='flex'
            justifyContent='center'
            alignItems='center'
            bgcolor={props.bg}
            borderRadius='60px'
            color={props.color}>
            {props.icon}
          </Box>
          <Box>
            <Typography
              fontSize='8px'
              sx={{ display: "flex", justifyContent: "center" }}>
              {props.section}
            </Typography>
            <Typography variant='h3' fontWeight='bold'>
              {props.money}
            </Typography>

            <Typography fontSize='10px'>
              <Typography
                fontSize='10px'
                fontWeight='bold'
                sx={{ display: "flex", justifyContent: "center" }}
                color={props.profit ? "#009944" : "red"}>
                {props.profit ? "↑" : "↓"}
                {props.profit ? props.profit : props.loss}
              </Typography>
              <Typography
                sx={{ display: "flex", justifyContent: "center" }}
                fontSize='10px'>
                this month
              </Typography>
            </Typography>
          </Box>
        </Box>
      )}
    </>
  );
};
