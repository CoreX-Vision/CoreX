<?php
namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index() {
        return Product::all();
    }

    public function store(Request $request) {
        $data = $request->validate([
            'name' => 'required|string',
            'price' => 'required|numeric',
        ]);
        $product = Product::create($data);
        return response()->json($product, 201);
    }

    public function show(Product $product) {
        return $product;
    }

    public function update(Request $request, Product $product) {
        $product->update($request->only(['name','price']));
        return response()->json($product);
    }

    public function destroy(Product $product) {
        $product->delete();
        return response()->noContent();
    }
}