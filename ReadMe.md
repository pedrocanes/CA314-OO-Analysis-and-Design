#Assignment for CA314 Object Oriented Design: Whist Game
Multiplayer using sockets

**Year 3: 2018/2019**

**Members:**<br />
-Pedro Canes<br />
-Santiago de Arribas de Renedo<br />
-Vilandas Sukutis<br />
-Stephen Stephanov<br />
-Fiona Tuite

Showcases data transfer via websockets.

TODO
-Agree on various necessary JSON Protocol names
-Agree on JSON name attributes

GOALS:-
Create provisional code


Serverside GOALS:
-ID and allocate different connected users to teams based on time of arrival

-Be capable of distributing randomised deck of cards to users

-Keep record of rounds, turns, points etc...

Legend

-numeral (2,3,4...10,J,K,Q,A)

-suits (H,D,C,S) hearts, diamonds etc..

hand may be represented as follows "6C', 'JC', 'AS', '9S', '4S', '4H', 'AH', '7H', '8C', '8H'"

FEW PROTOYPE JSON PROTOCOLS

__Lobby entry__

send to server --->

{data_info:"join_team", team:"1"}

<--- response to client

{data_info:"joined_team", team:"null"}       (Denied entry, game may be full)

{data_info:"joined_team", team:"1"}        (slot left open)

__During game__

send to the server --->

{data_info:"deal_card", card:"6C"}

<--- response to client 

{data_info:"card_played", card:"6C", user_id:"3"}
