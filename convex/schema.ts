import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  users: defineTable({
    email: v.string(),
    name: v.string(),
    photo: v.string(),
  }),

  groups: defineTable({
    name: v.string(),
    join_code: v.string(),
    photo: v.string(),
  }),

  join_groups: defineTable({
    member_id: v.id('users'),
    group_id: v.id('groups'),
    role: v.union(v.literal('admin'), v.literal('member')),
  }),

  schedules: defineTable({
    group_id: v.id('groups'),
    user_id: v.id('users'),
    details: v.object({
      day: v.union(
        v.literal('sat'),
        v.literal('sun'),
        v.literal('mon'),
        v.literal('tue'),
        v.literal('wed'),
        v.literal('thu'),
        v.literal('fri'),
      ),
      start_time: v.int64(), // between 00 and 23
      end_time: v.int64(), // between 00 and 59
      title: v.string(),
      location: v.string(),
      memo: v.string(),
    }),
  }),

  schedule_setup: defineTable({
    user_id: v.id('users'),
    start_date: v.union(v.literal('sat'), v.literal('sun'), v.literal('mon')),
    end_date: v.union(v.literal('fri'), v.literal('sat'), v.literal('sun')),
    start_time: v.int64(), // between 00 and 12
    end_time: v.int64(), // between 00 and 12
    time_type: v.union(v.literal('12h'), v.literal('24h')),
  }),
});
