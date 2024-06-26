import { Avatar, AvatarGroup, Box, Stack } from '@mui/material';
import React from 'react';
import {transFormImage} from "../../lib/features.js"
const AvatarCard = ({ avatar = [], max = 4 }) => {
  return (
    <div>
      <Stack direction="row" spacing={0.5}>
        <AvatarGroup max={max}
        sx={{
          position:"relative"
        }}>
          <Box width="5rem" height="3rem">
            {avatar.map((url, index) => (
              <Avatar
                key={index} // You can use index as the key, no need to use Math.random()
                src={transFormImage(url)}
                alt={`Avatar ${index}`}
                sx={{
                  width: '3rem',
                  height: '3rem',
                  position: 'absolute',
                  left: `${0.5 + index}rem`, // Adjust positioning as needed
                }}
              />
            ))}
          </Box>
        </AvatarGroup>
      </Stack>
    </div>
  );
};

export default AvatarCard;
