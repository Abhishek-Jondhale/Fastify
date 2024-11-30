import { db } from "../config/db"; 
import { Profile } from "../interfaces/profileInterface"; 

export const createProfile = async (profile: Profile) => {
  const query = `
    INSERT INTO profiles (userId, profileTitle, phone, location, zipCode, experienceLevel, skills, certifications)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const { userId, profileTitle, phone, location, zipCode, experienceLevel, skills, certifications } = profile;

  
  const [result]: any = await db.query(query, [
    userId,
    profileTitle || null,
    phone || null,
    location || null,
    zipCode || null,
    experienceLevel || null,
    JSON.stringify(skills) || null,
    JSON.stringify(certifications) || null,
  ]);

  return result;
};

export const getProfileById = async (id: number) => {
  const query = `SELECT * FROM profiles WHERE id = ?`;

 
  const [rows]: any[] = await db.query(query, [id]);

  return rows.length > 0 ? rows[0] : null;
};

export const updateProfile = async (id: number, profile: Partial<Profile>) => {
  const query = `
    UPDATE profiles
    SET profileTitle = ?, phone = ?, location = ?, zipCode = ?, experienceLevel = ?, skills = ?, certifications = ?
    WHERE id = ?
  `;
  const { profileTitle, phone, location, zipCode, experienceLevel, skills, certifications } = profile;

  const [result]: any = await db.query(query, [
    profileTitle || null,
    phone || null,
    location || null,
    zipCode || null,
    experienceLevel || null,
    JSON.stringify(skills) || null,
    JSON.stringify(certifications) || null,
    id,
  ]);

  return result;
};

export const deleteProfile = async (id: number) => {
  const query = `DELETE FROM profiles WHERE id = ?`;

  const [result]: any = await db.query(query, [id]);

  return result;
};

export const getAllProfiles = async () => {
  const query = `SELECT * FROM profiles`;

  const [rows]: any[] = await db.query(query);

  return rows;
};
