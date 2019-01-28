import { Profile } from "../../models/profile/profile.interface";


const userList: Profile[] = [
    {
        firstName: 'Paul',
        lastName: 'Halliday',
        email: 'paul@paul.com',
        avatar: 'assets/imgs/avatar.png',
        dateOfBirth: new Date()
    },
    {
        firstName: 'Raul',
        lastName: 'Castain',
        email: 'raul@castain.com',
        avatar: 'assets/imgs/avatar.png',
        dateOfBirth: new Date()
    },
    {
        firstName: 'George',
        lastName: 'Misterious',
        email: 'g@misterious.com',
        avatar: 'assets/imgs/avatar.png',
        dateOfBirth: new Date()
    },
    {
        firstName: 'Doctor',
        lastName: 'Doe',
        email: 'doctor@doe.com',
        avatar: 'assets/imgs/avatar.png',
        dateOfBirth: new Date()
    }
]

export const USER_LIST = userList;