import React, { useState, useEffect } from "react"
import { useTheme } from "@material-ui/core/styles"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"

import image1 from "../images/medical_service/1.jpg"
import image2 from "../images/medical_service/2.jpg"
import image2m from "../images/medical_service/2m.jpg"
import image3 from "../images/medical_service/3.jpg"
import image3m from "../images/medical_service/3m.jpg"
import image4 from "../images/medical_service/4.jpg"
import image4m from "../images/medical_service/4m.jpg"
import image5 from "../images/medical_service/5.jpg"
import image5m from "../images/medical_service/5m.jpg"
import image6 from "../images/medical_service/6.jpg"
import image6m from "../images/medical_service/6m.jpg"
import image7 from "../images/medical_service/7.jpg"
import CircularProgress from "@material-ui/core/CircularProgress"

const window = require("global/window")

const GridListWidth = window.innerWidth <= 599 ? 300 : 600

const tileDataMax = [
  {
    img: image1,
    title: "Image1",
    //  author: 'author',
    cols: 2,
  },
  {
    img: image2,
    title: "Image2",
    cols: 1,
  },
  {
    img: image3,
    title: "Image3",
    cols: 1,
  },
  {
    img: image4,
    title: "Image4",
    cols: 1,
  },
  {
    img: image5,
    title: "Image5",
    cols: 1,
  },
  {
    img: image6,
    title: "Image6",
    cols: 1,
  },
  {
    img: image7,
    title: "Image7",
    cols: 2,
  },
]

const tileDataMin = [
  {
    img: image1,
    title: "Image1",
    //  author: 'author',
    cols: 2,
  },
  {
    img: image2m,
    title: "Image2m",
    cols: 1,
  },
  {
    img: image3m,
    title: "Image3",
    cols: 1,
  },
  {
    img: image4m,
    title: "Image4",
    cols: 1,
  },
  {
    img: image5m,
    title: "Image5",
    cols: 1,
  },
  {
    img: image6m,
    title: "Image6",
    cols: 1,
  },
  {
    img: image7,
    title: "Image7",
    cols: 2,
  },
]

const IMAGES = window.innerWidth >= 600 ? tileDataMax : tileDataMin

export default function () {
  const theme = useTheme()

  const [imgsLoaded, setImgsLoaded] = useState(false)

  useEffect(() => {
    const loadImage = tile => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image()
        loadImg.src = tile.img
        // wait 2 seconds to simulate loading time
        loadImg.onload = () =>
          setTimeout(() => {
            resolve(tile.img)
          }, 1)

        loadImg.onerror = err => reject(err)
      })
    }

    Promise.all(IMAGES.map(image => loadImage(image)))
      .then(() => setImgsLoaded(true))
      .catch(err => console.log("Failed to load images", err))
  }, [])

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <GridList
        cellHeight={120}
        style={{
          width: GridListWidth,

          overflowY: "auto",
        }}
        cols={3}
        spacing={2}
      >
        {imgsLoaded ? (
          IMAGES.map(tile => (
            <GridListTile
              key={tile.img}
              cols={tile.cols || 1}
              style={{ padding: 1, margin: 0 }}
            >
              <img src={tile.img} alt={tile.title} />
            </GridListTile>
          ))
        ) : (
          <div
            style={{
              displax: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <CircularProgress
            // color="secondary"
            />
          </div>
        )}
      </GridList>
    </div>
  )
}
