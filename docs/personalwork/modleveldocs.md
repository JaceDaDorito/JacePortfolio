---
sidebar_position: 1
---

# Risk of Rain 2 Modded Level Documentation & Tooling 

|Engine|Dates|
|----|----|
|Unity 3D | 2023 - 2024 |

## Page Summary
This is a page dedicated to the general efforts I have made towards documentation and tooling for future creation of custom levels.

## Context
There was a point while working on [Starstorm 2](https://thunderstore.io/c/riskofrain2/p/TeamMoonstorm/Starstorm2/) in early 2023 where I felt like I was missing a lot of tools. More specifically, there was no way to instantiate and configure pre-existing jump pads prefabs in an efficient manner. I came to the conclusion that I needed to compile a library containing utilities to help build modded Risk of Rain 2 levels faster. 

## Locations of Precipitation
Some of the main tools I needed were already implemented into <a href="./personalwork/fblmod/">Fogbound Lagoon</a> and other work-in-progress maps I was working on at the time. The main tools I needed involved injecting certain pre-existing prefabs and assets from the game into the scene I was working on via Unity's Addressable system. For example, if I wanted my map to reuse a certain prop from an already existing map, I can instantiate a component that contains the address to that prop. The component has an attached Transform that it uses to instantiate the targetted prop.

These tools were eventually compiled into a mod called [Locations of Precipitation](https://thunderstore.io/c/riskofrain2/p/JaceDaDorito/LocationsOfPrecipitation/), a library containing tooling to build Risk of Rain 2 levels. This was a collective effort between myself and a few other developers credited under the mod page. I wrote a big portion of these tools and did extensive testing of the entire library. Since the mods initial conception, it has recieved more additions such as tools to instantiate Jump Pads and the Artifact Dialer from the game's Stage 5 levels. The library has since recieved a collective 1.2 million downloads, supporting several mods such as [Ancient Observatory](https://thunderstore.io/c/riskofrain2/p/wormsworms/Ancient_Observatory/), [Forlorn Wreckage](https://thunderstore.io/c/riskofrain2/p/Winslow/Forlorn_Wreckage/), [SnowtimeStages](https://thunderstore.io/c/riskofrain2/p/winterwonderland/SnowtimeStages/), and [EnemiesReturns](https://thunderstore.io/c/riskofrain2/p/Risky_Sleeps/EnemiesReturns/). Fogbound Lagoon was also migrated to use this library since it provided more stable tools in comparison.

<img src="/img/jumppad_LOP.png" alt="Jump Pad" width="1000"/>

## R2API Stages
[R2API Stages](https://thunderstore.io/c/riskofrain2/p/RiskofThunder/R2API_Stages/) is a smaller library mod targetted at simplifying the registration of new maps into the existing game progression. For example, I requested Fogbound Lagoon to be registered as a Stage 3, meaning R2API will take my level and insert it into the level collection containing the other Stage 3 levels (Rallypoint Delta, Scorched Acres, etc.). The library also ensures the requested level properly transitions to the next set of levels when players progress (Abyssal Depths, Sundered Grove, etc.).

## Documentation
Once all the tooling was solidified, I kickstarted the creation of the [stage creation documentation](https://risk-of-thunder.github.io/R2Wiki/Mod-Creation/Assets/Stage/) hosted on the Risk of Rain 2 Modding Wiki. The guide assumes that the reader has basic knowledge of Unity, but it does go over registering maps into the game progression and creating the maps themselves. The guide was designed to establish a consistent terminology and provide plenty of visuals. It also briefly goes over the purpose of the afformentioned libraries such as Locations of Precipitation and R2API. I finished the basis of this documentation in November of 2023, and it continued recieving updates and additions from other contributors going into 2024. I firmly believe this documentation threw open the gates for custom levels for Risk of Rain 2, allowing the medium to be as approachable as it is today.

<img src="/img/documentation_snippet_ror2.png" alt="Documentation Snippet" width="1000"/>

