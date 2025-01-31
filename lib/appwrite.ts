import {
    Account,
    Avatars,
    Client,
    Databases,
    ID,
    Query,
    Storage,
  } from "react-native-appwrite";
  
  export const appwriteConfig = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform: "com.sixn8.dukaaon",
    projectId: "679c805f00105c1397cd", 
    databaseId: "679c841d0021eac25d95",
    userCollectionId: "679c843b002d131795b6",
    productsCollectionID: "679c8458001a92ebe37d",
    storageId: "679c85ae00385af117c9",
  };
  
  const client = new Client();
  
  client
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.projectId)
    .setPlatform(appwriteConfig.platform);
  
  const account = new Account(client);
  const storage = new Storage(client);
  const avatars = new Avatars(client);
  const databases = new Databases(client);
  
  
  // --------------------------------------------------------------------------------------
  // User Account Functions
  // --------------------------------------------------------------------------------------
  
  /**
 * Fetch a user by phone number or create a new one if the user does not exist.
 * @param {string} phone - Phone number of the user.
 * @param {string} role - Role of the user ('wholesaler' or 'retailer').
 * @returns {object} User document from the database.
 */
export const getUserOrCreate = async (phone, role = "retailer") => {
    try {

        // Store user in the database collection
        const newUser = await databases.createDocument(
          appwriteConfig.databaseId,
          appwriteConfig.userCollectionId,
          ID.unique(),
          {
            accountId: ID.unique(),
            phone: phone,
            role: role,
          }
        );
        return newUser;
      } catch (error) {
        console.error("Error fetching or creating user:", error);
      }
    }