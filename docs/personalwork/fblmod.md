---
sidebar_position: 0
---

# Fogbound Lagoon Mod

<img src="/img/Fogbound_Lagoon_Icon.png" alt="Fogbound Lagoon Icon" width="200"/>

|Engine|Dates|
|----|----|
|Unity 3D | 2022 |

### [Project Link](https://thunderstore.io/c/riskofrain2/p/JaceDaDorito/FogboundLagoon/)
### [Trailer Link](https://www.youtube.com/watch?v=gcgQ5f5xF7o)
[![Trailer Link](/img/Fogbound_Lagoon_Banner1.png)](https://www.youtube.com/watch?v=gcgQ5f5xF7o)

## Project Summary
Fogbound Lagoon was my personal submission to the 2022 [Halloween Modjam](https://thunderstore.io/c/riskofrain2/?includedCategories=327) hosted in the Risk of Rain 2 Modding Discord server. The map was made within the month of October of that year and still recieves maintenence updates to this day.

## Context & Design Goals
Since this project is a lot more personal, I want to use this project as an opportunity to explain my design process when creating a level from scratch. I also see it as interesting insight, given I only had just under a month to produce and publish this map.

By this point, I already had a lot of experience with prototyping Risk of Rain 2 levels. I was already familiar with how to import my levels into the game and I was honing my skills on white-boxxing. One of the work-in-progress levels I was creating that predated Fogbound Lagoon was called [Arid Expanse](https://www.youtube.com/watch?v=qIbm7Bc0fi4).
|![Arid Expanse Blender](/img/arid_expanse_blend.png)|![Arid Expanse In-game](/img/arid_expanse_ingame.PNG)|
|-|-|

With the announcement of the Halloween Modjam, I had the inspiration to make a spooky map that fit within the world of Risk of Rain 2. The idea initially started as "how would I port the water mechanics from the first Risk of Rain game into the sequel?" At this point, I would've started drawing thumbnails of the level to nail down the locale and feel like these below:
|![Arid Expanse Drawing](/img/arid_expanse_drawing1.png)|![Arid Landscape](/img/arid_landscape.png)|![Arid Thumbnail](/img/arid_thumbnail.png)|
|-|-|-|
|![Wetland Aspect Alt](/img/wetland.png)|![Wetland Aspect Alt Layout](/img/wetlandlayout.png)|![Clockwork Plataeu Towers](/img/towers.png)|

Since this was a jam, however, I skipped directly into prototyping the level and water mechanics. I knew for water to work, the mechanics tied to them needed to be relatively lightweight: no custom swimming states or unique enemy navigation. I narrowed down the design goal to these three points:
- The water should change the player's movement without feeling sluggish.
- The water should effectively divide the map into two distinct parts.
- The player should be able to tell when their character is underwater.

## Prototyping and Building the Level

I knew right away that my best option for movement was to dynamically shift the player's gravity underwater; this was what the original Risk of Rain did with its water mechanics and there were already levels in RoR2 that lowered the player's gravity. I also decided to extend this to the monsters as well. This already had me thinking about the enemy composition: I wanted Gups because they would jump higher underwater and I wanted Xi Construct since I felt the lowered gravity made them more approachable.

 <img src="/img/old_fbl.png" alt="Old Fogbound Lagoon" width="388"/>

 I also started prototyping the post processing effects for when the player camera went underwater. I originally wanted a hazier, murkier look for the water, but I ultimately decided to go in a different direction because I felt like it made the map too monochrome and it was hard to see. The sea level visibility also needed improvement so players can percieve the water depth above them.

<img src="/img/fbl_water_test.gif" alt="Old Fogbound Lagoon Water" width="388"/>

Instead of having a murkier look to the water, I made the underwater sections of the map darker and have more contrast. Risk of Rain 2 is a colorful game, but rarely does it lean into dark, bioluminiscent environments. I first started with implementing these red braziers around the map that added much needed composition to the map. I also implemented post processing that bumped the saturation values of reds and yellows underwater. The resulting effect is an interesting dichotomy where above water is very monochromic and gray whilst underwater is very colorful. I felt it effectively conveyed information to the player about the state of their character and strengthened the aesthetic division between the two parts of the map. I also added a more obvious water line and distortion effects so the depth of the water is conveyed better.

|![Above Water](/img/fbl_abovewater_old.png)|![Under water](/img/fbl_underwater_old.png)|
|-|-|

At this stage, I also started solidifying the level geometry of the level. Considering this map has little to no structures, I opted to model the level geometry by sculpting. I knew I wanted these shelves of land that gradually sank deeper into the water to give this sense of "progression" no matter what direction you explored. I also knew I wanted an overhanging arch above the water so you can properly dive into the water from above. 

|![Model Screenshot 1](/img/fbl_model_screenshot.png)|![Model Screenshot 2](/img/fbl_model_screenshot2.png)|
|-|-|

## Finishing and Polishing the Level

With the new art direction and level geometry, I once again started thinking about what monsters I wanted in the level. There is a decent amount of verticality with a lot of overhangs, tunnels, and arches. I immediately thought about the Alpha Constructs and how interesting they would be hanging off the sides of the geometry. I also thought about Magma Worm, a boss that can efficiently travel throughout the shelves of the level. I also thought it was fun to put the glowing lava boss in a water level, it reminded me of underwater volcanos. Enemy readibility was a problem I wanted to address, so I opted to include monsters that either had saturated colors or glowed such as the Imps.

Unfortunately, I did not have the time to create many custom assets for the level, resorting to reusing prexisting assets from the game. I did feel that I had enough to work with to still make something unique. I leaned more into this bioluminescent look underwater, adding twinkling grass that broke up the ground. This was around the time the level really started coming together. 

  <img src="/img/fbl_ominous.png" alt="Ominous" width="388"/>

  I started to add boulders and trees around the map to break up the space and provide cover. The first shelf of the map was effectively a flat beach area, it was important to break up the space there especially.

  I also heavily relied on the use of the game's prexisting "Triplanar Terrain Blend" shader to decorate the geometry. It was simple to vertex paint my terrain and have certain textures mapped to to each color channel. This did take some time, however, I did not have access to these shaders in the editor so I resorted to trial and error. I wanted the above water sections of the map to be grassier and greener whilst underwater is more covered in lichen.

<img src="/img/fbl_model_screenshot3.png" alt="Model Screenshot 3" width="388"/>

I also needed some landmarks around the map to help distinguish player location more. I eventually got these custom bone assets from [dotflare](https://x.com/dotflare3?lang=en) to put on the bottom most shelf of the level. I think it really serves to the desolated feel of the map whilst also alluding to something bigger swimming in the water.

<img src="/img/texFBLScenePreview.PNG" alt="FBL Old Preview" width="388"/>

To enhance the underwater feel, I also muffled all game audio if your camera dipped below the water. I felt it added an extra queue to know when your character was in the water. 

## Release and Patches

### [Teaser Link](https://www.youtube.com/watch?v=KVENv7-2HfA)
[![Teaser Link](/img/Fogbound_Lagoon_Banner2.png)](https://www.youtube.com/watch?v=KVENv7-2HfA)

The level was close to finished by October 22nd 2022. All that was left was sprinkling the level with more props, enemy and interactable balance, and bug testing. The mod was released on October 28th to great success. I ended up tying in placement with another mod for first place, winning the Modjam. However, there were still some issues that needed to be addressed.

One core issue people had with the level was the fact that the underwater portions of the map made it hard to see chests and other interactables. Combined with the post-processing, the blue chests blended into the dark blue ground way too often. To address this, I textured the ground a bit better and also discolored it to be more green. The underwater floor now has a more mossy look to it. I also took this opportunity to update some of the kitbashed assets such as the crimson braziers and the bioluminescent grass. It also gave me the excuse to sprinkle in more lightsources around the map. The result was large improvements to readibility overall, whilst still keeping some amount of darkness in the environment.

<img src="/img/texFBLScenePreview2.PNG" alt="FBL Preview" width="388"/>

I still maintain this mod to this day, making sure it is playable for any release of Risk of Rain 2. I made changes such as adding support for newly added DLC enemies and for Alloyed Collective's access nodes. As of this writing, [Fogbound Lagoon is playable under the current 1.4.1 version of Risk of Rain 2](https://www.youtube.com/watch?v=R79hKENUrOY).