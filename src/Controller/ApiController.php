<?php
namespace App\Controller;

use Automattic\WooCommerce\Client;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;


class ApiController
{
    public function get($method, $id = null, Request $request, Client $wooCommerce)
    {
        $path = $this->generatePath($method, $id);

        try {
            $wooCommerceParameters = $this->createParameterBag($request->query);

            $responseData = $wooCommerce->get($path, $wooCommerceParameters);

            return $this->createJsonResponse($responseData);
        } catch(\Exception $e) {
            return $this->returnExeptionMessage($e);
        }
    }

    public function post($method, Request $request, Client $wooCommerce)
    {
        $path = $method;
        $wooCommerceParameters = json_decode($request->getContent(), true);

        try {
            $responseData = $wooCommerce->post($path, $wooCommerceParameters);

            return $this->createJsonResponse($responseData);
        } catch(\Exception $e) {
            return $this->returnExeptionMessage($e);
        }
    }

    public function returnExeptionMessage(\Exception $e): Response
    {
        $json = $e->getMessage();
        $code = $e->getResponse()->getCode();
        return new Response($json, $code);
    }

    public function createParameterBag($parameterBag): array
    {
        $wooCommerceParameters = [];
        foreach ($parameterBag->keys() as $key) {
            $wooCommerceParameters[$key] = $parameterBag->get($key);
        }
        return $wooCommerceParameters;
    }

    public function createJsonResponse($json): JsonResponse
    {
        $response = new JsonResponse($json);
        $response->headers->set('Access-Control-Allow-Origin', $_ENV['API_ACCESS_CONTROL_ALLOW_ORIGIN']);
        $response->headers->set('Access-Control-Allow-Headers', $_ENV['API_ACCESS_CONTROL_ALLOW_HEADERS']);
        return $response;
    }

    public function generatePath($method, $id): string
    {
        return $method . (!empty($id) ? "/" . $id : "");
    }
}
