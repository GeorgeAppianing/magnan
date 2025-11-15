"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { supabaseClient } from "@/utils/supabaseClient";

interface AuthContextType {
  user: unknown;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<unknown>(null);
  const [loading, setLoading] = useState(true);

  // Get current user session on load
  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabaseClient.auth.getSession();
      setUser(data.session?.user ?? null);
      setLoading(false);
    };
    getUser();

    // Listen for login/logout changes
    const { data: subscription } = supabaseClient.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => {
      subscription.subscription.unsubscribe();
    };
  }, []);

  // Login function
  const signIn = async (email: string, password: string) => {
    setLoading(true);
    const { error } = await supabaseClient.auth.signInWithPassword({
      email,
      password,
    });
    if (error) console.error("Login error:", error.message);
    setLoading(false);
  };

  // Logout function
  const signOut = async () => {
    await supabaseClient.auth.signOut();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use AuthContext easily
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
