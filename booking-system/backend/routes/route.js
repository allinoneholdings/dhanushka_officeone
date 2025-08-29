import express from 'express';
import {
  createSuperAdmin,
  createStaff,
  createCustomer,
  loginSuperAdmin,
  loginStaff,
  loginCustomer,
  getAllUsers
} from '../controller/UserController.js';
import { createBranch, getAllBranches, SearchBranch } from '../controller/BranchController.js';
import { createBranchPackage, createPackage, getAllPackages, SearchPackage } from '../controller/PackageController.js';
import { createBooking } from '../controller/BookingController.js';

const route = express.Router();

route.post('/user/superadmin', createSuperAdmin);
route.post('/user/staff', createStaff);
route.post('/user/customer', createCustomer);

// Login routes
route.post('/login/superadmin', loginSuperAdmin);
route.post('/login/staff', loginStaff);
route.post('/login/customer', loginCustomer);

route.get('/users', getAllUsers);
route.get('/packages', getAllPackages);
route.get('/branches', getAllBranches);

route.post('/branch', createBranch);
route.post('/package', createPackage);
route.post('/booking', createBooking);
route.post('/branchPackage', createBranchPackage);

route.post('/branch/search', SearchBranch);
route.post('/package/search', SearchPackage);

export default route;