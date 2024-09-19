import { Router } from "express";
import { createClerkClient } from '@clerk/backend'

const router = Router();

router.get('/', async (req, res) => {
    const clerkClient = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY })
  try {
    // Fetch all users from Clerk
      const response = await clerkClient.users.getUserList()
      const users = response.data
    console.log(users)
    // Optionally format the user data as needed
    const userList = users.map(user => ({
      id: user.id,
      email: user.emailAddresses[0]?.emailAddress,
      username: user.username,
      createdAt: user.createdAt,
      firstName: user.firstName,
      lastName: user.lastName,
    }));

    res.json(userList);
  } catch (error) {
    console.error('Error fetching user list:', error);
    res.status(500).json({ message: 'Failed to fetch user list' });
  }
});


export default router;