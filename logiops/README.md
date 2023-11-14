# logid
Logitech mx master 2s configuration

## Instruction

Open terminal

For Debial and Ubuntu

```sh
sudo apt install cmake libevdev-dev libudev-dev libconfig++-dev git
```
Clone repository

```sh
git clone https://github.com/PixlOne/logiops.git
```
Copy and Paste the following commands in terminal. If you have problems with the commands below try with sudo

```sh
cd logiops
mkdir build
cd build
cmake ..
make
```
Install

```sh
sudo make install
```

Copy and paste logid.cfg content into file located in /etc/logid.cfg. If file logid.cfg not exist just create new one. 

Start using

```sh
sudo systemctl start logid
```

Do if you want autostart logid

```sh
sudo systemctl enable logid
```
