"use client";

import Grid from "@mui/material/Grid";
import EventCard from "./EventCard";

import image1 from "@/assets/images/evento_1.jpg";
import image2 from "@/assets/images/evento_2.jpg";
import image3 from "@/assets/images/evento_3.jpg";
import image4 from "@/assets/images/evento_4.png";
import image5 from "@/assets/images/evento_5.jpg";
import image6 from "@/assets/images/evento_6.jpg";
import image7 from "@/assets/images/evento_7.jpg";

const events = [
  {
    title: "Campeonato 4 Estações",
    image: image1,
    progress: 60,
  },
  {
    title: "Campeonato DropShot",
    image: image2,
    progress: 40,
  },
  {
    title: "Campeonato Gohan",
    image: image3,
    progress: 30,
  },
  {
    title: "Campeonato Arena 77",
    image: image4,
    progress: 20,
  },
  {
    title: "Campeonato Circuito Fogo",
    image: image5,
    progress: 70,
  },
  {
    title: "Campeonato Circuito Agua",
    image: image6,
    progress: 50,
  },
  {
    title: "Campeonato Pé na Areia",
    image: image7,
    progress: 15,
  },
];

export default function EventsGrid() {
  return (
    <Grid container spacing={2}>
      {events.map((ev) => (
        <Grid item key={ev.title}>
          <EventCard {...ev} />
        </Grid>
      ))}
    </Grid>
  );
}
