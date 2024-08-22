import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center items-center bg-stone100">
        <div className="flex flex-col bg-white w-[700px] h-fit justify-center rounded-2xl p-7 gap-5 my-32">
          <Image 
            src={"/images/image-omelette.jpeg"}
            width={500}
            height={400}
            alt="illustration"
            className="rounded-xl bg-no-repeat bg-center bg-cover w-full"
          />

          <div className="flex flex-col gap-4">
            <span className="text-3xl text-stone900 young-serif">
              Simple Omelette Recipe
            </span>
            <span className="text-stone600">
              An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables or meats.
            </span>
            <div className="flex flex-col p-5 bg-rose50 rounded-xl">
              <span className="text-xl text-rose800 semibold">
                Preparation time
              </span>
              <div className="ml-6">
                <ul className="leading-9">
                  <li className="list-disc text-rose800 space-y-4">
                    <span className="semibold text-stone600">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Total:</span>
                    <span className="text-stone600">&nbsp;Approximately 10 minutes</span>
                  </li>

                  <li className="list-disc text-rose800 space-y-4">
                    <span className="semibold text-stone600">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Preparation:</span>
                    <span className="text-stone600">&nbsp;5 minutes</span>
                  </li>

                  <li className="list-disc text-rose800 space-y-4">
                    <span className="semibold text-stone600">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cooking:</span>
                    <span className="text-stone600">&nbsp;5 minutes</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <span className="text-brown800 text-2xl young-serif">
                Ingredients
              </span>
              <div className="ml-6">
                <ul className="leading-9">
                  <li className="list-disc text-brown800 space-y-4">
                    <span className="text-stone600">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2-3 large eggs</span>
                  </li>

                  <li className="list-disc text-brown800 space-y-4">
                    <span className="text-stone600">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Salt, to taste</span>
                  </li>

                  <li className="list-disc text-brown800 space-y-4">
                    <span className="text-stone600">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pepper, to taste</span>
                  </li>

                  <li className="list-disc text-brown800 space-y-4">
                    <span className="text-stone600">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1 tablespoon of butter oil</span>
                  </li>

                  <li className="list-disc text-brown800 space-y-4">
                    <span className="text-stone600">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Optional fillings: cheese, diced vegetables, cooked meats, herbs</span>
                  </li>
                </ul>
              </div>
            </div>
            <hr />

            <div>
              <span className="text-brown800 text-2xl young-serif">
                Instructions
              </span>
              <div className="ml-6">
                <ul className="">
                  <li className="list-decimal semibold text-brown800 space-y-4">
                    <div className="ml-4 mb-3">
                      <span className="semibold text-stone600">Beat the eggs:</span>
                      <span className="text-stone600">&nbsp;In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of milk for a fluffier texture.</span>
                    </div>
                  </li>

                  <li className="list-decimal semibold text-brown800 space-y-4">
                    <div className="ml-4 mb-3">
                      <span className="semibold text-stone600">Heat the pan:</span>
                      <span className="text-stone600">&nbsp;Place a non-sticky frying over medium heat and add butter or oil.</span>
                    </div>
                  </li>

                  <li className="list-decimal semibold text-brown800 space-y-4">
                    <div className="ml-4 mb-3">
                      <span className="semibold text-stone600">Cook the omelette:</span>
                      <span className="text-stone600">&nbsp;Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.</span>
                    </div>
                  </li>

                  <li className="list-decimal semibold text-brown800 space-y-4">
                    <div className="ml-4 mb-3">
                      <span className="semibold text-stone600">Add fillings (optional):</span>
                      <span className="text-stone600">&nbsp;When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.</span>
                    </div>
                  </li>

                  <li className="list-decimal semibold text-brown800 space-y-4">
                    <div className="ml-4 mb-3">
                      <span className="semibold text-stone600">Fold and serve:</span>
                      <span className="text-stone600">&nbsp;As the omlette continues to cook, carefully lift one edge and fold it over the fillings.Let it cook for another minute, then slide it onto a plate.</span>
                    </div>
                  </li>

                  <li className="list-decimal semibold text-brown800 space-y-4">
                    <div className="ml-4">
                      <span className="semibold text-stone600">Enjoy:</span>
                      <span className="text-stone600">&nbsp;Serve hot, with additional salt and pepper if needed.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
            
            <div className="flex flex-col gap-4">
              <span className="text-brown800 text-2xl young-serif">
                Nutrition
              </span>
              <span className="text-stone600">
                The table below shows nutritional values per serving without the additional fillings.
              </span>
              <div className="flex flex-col gap-3">
                <div className="flex w-full px-8">
                  <div className="w-1/2 text-stone600">Calories</div>
                  <div className="w-1/2 text-brown800 semibold">227kcal</div>
                </div>
                <hr />
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex w-full px-8">
                  <div className="w-1/2 text-stone600">Carbs</div>
                  <div className="w-1/2 text-brown800 semibold">0g</div>
                </div>
                <hr />
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex w-full px-8">
                  <div className="w-1/2 text-stone600">Protein</div>
                  <div className="w-1/2 text-brown800 semibold">20g</div>
                </div>
                <hr />
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex w-full px-8">
                  <div className="w-1/2 text-stone600">Fat</div>
                  <div className="w-1/2 text-brown800 semibold">22g</div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </main>
  );
}
