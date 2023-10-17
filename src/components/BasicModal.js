import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./BasicModal.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ selectedMovie, onClose, getGenreNames }) {
  return (
    <Modal
      open={selectedMovie}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {selectedMovie && (
          <>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <img
                className="modal-img"
                src={
                  selectedMovie.poster_path === null
                    ? "https://cinemaone.net/images/movie_placeholder.png"
                    : `https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`
                }
                alt={selectedMovie.title}
              />
              <p className="closeBtn" onClick={onClose}>
                ×
              </p>
              <div className="info">
                <p className="title">{selectedMovie.title}</p>
                <p>Vote / Votes : {selectedMovie.vote_average}</p>
                <p>Original language : {selectedMovie.original_language}</p>
                <p>
                  Genre : {getGenreNames(selectedMovie.genre_ids).join(", ")}
                </p>
                <p>Release date : {selectedMovie.release_date}</p>
              </div>
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <div style={{ marginTop: -250 }}>
                <p className="about-title">About</p>
                <p className="about">{selectedMovie.overview}</p>
              </div>
            </Typography>
          </>
        )}
      </Box>
    </Modal>
  );
}
