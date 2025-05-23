**I. API Emit**
**Emit data to client(s)**
POST /emit

**1. Gửi 1 message đến 1 chanel**
{
  "to": "room/uid",
  "data": "Data gửi về client"
}

**2. Gửi 1 message đến nhiều chanel**
{
  "to": ["room1/uid1", "room2/uid2", "room3/uid3"],
  "data": "Data gửi về client"
}

**3. Gửi Nhiều message đến 1 hoặc nhiều chanel**

[
  {
    "to": ["room1/uid1", "room2/uid2", "room3/uid3"],
    "data": "Data gửi về client"
  },

  {
    "to": "room1/uid1",
    "data": "Data gửi về client"
  }
]

**3. Đến tất cả chanel**
{
  "data": "Data gửi về client"
}

=> Tùy biến các kiểu 1/nhiều để gửi cho tối ưu

**II. EVENT ON/EMIT TỪ CLIENT**

**Emit:**
**1. Join room**
join: {name: "room name"}

**2. Leave room**
leave: {name: "room name"}

**3. Live**
live: {name: "page name"}

**Event:**
info: Event khi connection thành công
message: Nhận dữ liệu broadcast từ api
change: Event khi user thay đổi như live, join, leave working on
