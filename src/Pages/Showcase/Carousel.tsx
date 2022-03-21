import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Box, Paper, Slide, useTheme } from "@mui/material";

SwiperCore.use([EffectCoverflow, Pagination]);

const Carousel = () => {
  const theme = useTheme();
  return (
    <Slide in easing={{ enter: "cubic-bezier(1,-0.21,0,1.24)" }} timeout={700}>
      <Box>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <Box sx={{ py: 5, px: 3 }}>
              <Paper
                elevation={10}
                sx={{
                  height: (theme) => theme.spacing(70),
                  [theme.breakpoints.down("md")]: {
                    height: (theme) => theme.spacing(70),
                  },
                  [theme.breakpoints.down("sm")]: {
                    height: (theme) => theme.spacing(30),
                  },
                  background: "transparent",
                  p: 2,
                }}
              >
                Soon...
              </Paper>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{ py: 5, px: 3 }}>
              <Paper
                elevation={10}
                sx={{
                  height: (theme) => theme.spacing(70),
                  [theme.breakpoints.down("md")]: {
                    height: (theme) => theme.spacing(70),
                  },
                  [theme.breakpoints.down("sm")]: {
                    height: (theme) => theme.spacing(30),
                  },
                  background: "transparent",
                  p: 2,
                }}
              >
                Soon...
              </Paper>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{ py: 5, px: 3 }}>
              <Paper
                elevation={10}
                sx={{
                  height: (theme) => theme.spacing(70),
                  [theme.breakpoints.down("md")]: {
                    height: (theme) => theme.spacing(70),
                  },
                  [theme.breakpoints.down("sm")]: {
                    height: (theme) => theme.spacing(30),
                  },
                  background: "transparent",
                  p: 2,
                }}
              >
                Soon...
              </Paper>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{ py: 5, px: 3 }}>
              <Paper
                elevation={10}
                sx={{
                  height: (theme) => theme.spacing(70),
                  [theme.breakpoints.down("md")]: {
                    height: (theme) => theme.spacing(70),
                  },
                  [theme.breakpoints.down("sm")]: {
                    height: (theme) => theme.spacing(30),
                  },
                  background: "transparent",
                  p: 2,
                }}
              >
                Soon...
              </Paper>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
    </Slide>
  );
};

export default Carousel;
