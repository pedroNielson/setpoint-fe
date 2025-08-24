"use client";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  LinearProgress,
  IconButton,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Image from "next/image";
interface EventCardProps {
  title: string;
  image: any;
  progress: number;
}

export default function EventCard({ title, image, progress }: EventCardProps) {
  return (
    <Card sx={{ borderRadius: 2, overflow: "hidden", width: 300 }}>
      <Box sx={{ position: "relative" }}>
        {/* <CardMedia component="img" height="140" image={image} alt={title} />
         */}
        <Image
          src={image}
          alt={title}
          width={260}
          height={140}
          style={{ objectFit: "cover", width: "100%", height: 140 }}
        />
        <IconButton
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            backgroundColor: "rgba(255,255,255,0.8)",
          }}
        >
          <MoreVertIcon />
        </IconButton>
      </Box>
      <CardContent>
        <Typography variant="subtitle1" fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          👥 Confirmados
        </Typography>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{ height: 8, borderRadius: 4 }}
        />
      </CardContent>
    </Card>
  );
}
