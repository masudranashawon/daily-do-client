"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/hooks/useAuthContext";

const HomePage = () => {
  const [addTodo, setAddTodo] = useState("");
  const { state } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (!state?.user) {
      router.push("/login");
    }
  }, [router, state?.user]);

  return (
    <main className='home-page'>
      <section className='todo-section-wrapper'>
        <div className='add-todo-section'>
          <h2>Create your todo</h2>

          <form className='add-todo-form'>
            <div className='form-ctrl flex flex-col gap-2'>
              <label htmlFor='add-todo'>Enter todo title</label>

              <input
                value={addTodo}
                onChange={(e) => setAddTodo(e.target.value)}
                type='text'
                id='add-todo'
                placeholder='eg. Metting with Destiny at 5:30PM'
                required
              />
            </div>

            <button type='submit' className='submit'>
              Add todo
            </button>
          </form>
        </div>

        <div className='todos'>
          <h2>{"You haven't created any todo yet."}</h2>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
