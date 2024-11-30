import { FastifyRequest, FastifyReply } from 'fastify';
import * as ProfileModel from '../models/profileModel';
import { Profile } from '../interfaces/profileInterface';

export const createProfile = async (fastify: unknown, request: FastifyRequest, reply: FastifyReply) => {
  try {
    const profile = request.body as Profile;
    const result = await ProfileModel.createProfile(profile);
    reply.code(201).send({ id: (result as any).insertId, ...profile });
  } catch (error) {
    reply.code(500).send({ error});
  }
};

export const getAllProfiles = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const profiles = await ProfileModel.getAllProfiles();
    reply.send(profiles);
  } catch (error) {
    reply.code(500).send({ error});
  }
};

export const getProfileById = async (fastify: unknown, request: FastifyRequest, reply: FastifyReply) => {
  try {
    const { id } = request.params as { id: string };
    const profile = await ProfileModel.getProfileById(Number(id));
    if (!profile) {
      reply.code(404).send({ error: 'Profile not found' });
      return;
    }
    reply.send(profile);
  } catch (error) {
    reply.code(500).send({ error});
  }
};

export const updateProfile = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const { id } = request.params as { id: string };
    const profile = request.body as Profile;
    await ProfileModel.updateProfile(Number(id), profile);
    reply.send({ message: 'Profile updated successfully' });
  } catch (error) {
    reply.code(500).send({ error});
  }
};

export const deleteProfile = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const { id } = request.params as { id: string };
    await ProfileModel.deleteProfile(Number(id));
    reply.send({ message: 'Profile deleted successfully' });
  } catch (error) {
    reply.code(500).send({ error});
  }
};
