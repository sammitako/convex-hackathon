import { join } from 'path';
import { query, mutation } from './_generated/server';
import { v } from 'convex/values';

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query('groups').collect();
  },
});

export const getGroup = query({
  args: {
    id: v.id('groups'),
  },
  handler: async (ctx, { id }) => {
    return await ctx.db
      .query('groups')
      .filter((q) => q.eq(q.field('_id'), id))
      .unique();
  },
});

export const create = mutation({
  args: { name: v.string(), join_code: v.string(), photo: v.string() },
  handler: async ({ db }, args) => {
    return await db.insert('groups', args);
  },
});
