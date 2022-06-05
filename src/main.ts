import { PlayerChatEvent, ServerCommands } from '@customrealms/core';
import fs from 'fs';

ServerCommands.register(`/savelocation {location}...`, async (player, call) => {

     const locationX = player.getTargetBlock()?.getX();
     const locationY = player.getTargetBlock()?.getY();
     const locationZ = player.getTargetBlock()?.getZ();

     const locationName = call.getPlaceholder('location')!;

     const parsedJSON = JSON.parse(locationName + locationX + locationY + locationZ);

     fs.writeFile(`data/locations.json`, parsedJSON, 'utf-8', (err) => {
          if (err) throw err;
     })

     console.log(`${player.getDisplayName()} has saved a location named "${locationName}". X: ${locationX} / Y: ${locationY} / Z: ${locationZ}`)

     player.sendMessage(`Your location named "${locationName}" has been saved.\nX: ${locationX} / Y: ${locationY} / Z: ${locationZ}`)
})
