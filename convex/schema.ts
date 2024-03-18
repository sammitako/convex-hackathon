import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  user: defineTable({
    email: v.string(),
    name: v.string(),
    photo: v.string(),
  }),

  group: defineTable({
    name: v.string(),
    join_code: v.int64(),
  }),

  join_group: defineTable({
    member_id: v.id("user"),
    group_id: v.id("group"),
    role: v.union(v.literal("admin"), v.literal("member")),
  }),

  schedule: defineTable({
    group_id: v.id("group"),
    user_id: v.id("user"),
    details: v.object({
      day: v.union(
        v.literal("sat"),
        v.literal("sun"),
        v.literal("mon"),
        v.literal("tue"),
        v.literal("wed"),
        v.literal("thu"),
        v.literal("fri")
      ),
      start_time: v.int64(), // between 00 and 23
      end_time: v.int64(), // between 00 and 59
      title: v.string(),
      location: v.string(),
      memo: v.string(),
    }),
  }),

  schedule_setup: defineTable({
    user_id: v.id("user"),
    start_date: v.union(v.literal("sat"), v.literal("sun"), v.literal("mon")),
    end_date: v.union(v.literal("fri"), v.literal("sat"), v.literal("sun")),
    start_time: v.int64(), // between 00 and 12
    end_time: v.int64(), // between 00 and 12
    time_type: v.union(v.literal("12h"), v.literal("24h")),
  }),
});
