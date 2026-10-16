import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },
    phone: {
      type: String,
      required: true,
      unique: true,
      match: [/^\d{10}$/, "Phone number must be exactly 10 digits"],
      validate: {
        validator: function (v) {
          return /\d{10}/.test(v);
        },
        message: (props) => `${props.value} is not a valid 10-digit phone number!`,
      },
    },
    password: {
      type: String,
      required: true,
      select: false, // Prevent password from being returned in queries
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    isDeleted: {
      type: Boolean,
      default: false, // Soft deletion flag
    },
    passwordResetToken: { type: String, default: undefined },
    passwordResetExpires: { type: Date, default: undefined }
  },
  { timestamps: true } // Auto adds createdAt & updatedAt fields
);

// Hash password before saving
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password") || !this.password) return next(); // Prevent hashing undefined password
  try {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (error) {
    next(error); // Pass error to Mongoose
  }
});

// Method to compare passwords
UserSchema.methods.comparePassword = function (enteredPassword) {
  return bcrypt.compare(enteredPassword, this.password); // No need for `await`
};

// Unique indexes
// UserSchema.index({ email: 1 }, { unique: true });
// UserSchema.index({ phone: 1 }, { unique: true });

// ✅ FIX: Prevent OverwriteModelError in Next.js
const User = mongoose.models?.User || mongoose.model("User", UserSchema);

export default User;
